import { SECTION, DIV_FOR_INPUT, LOWER_HEADING, MAIN_CONTENT_DIV, SEARCH_BUTTON, UPPER_HEADING, SEARCH_INPUT } from "../constants.js";
import { getGenres, filterGenreAndYear } from "../pages/filters.js";
import { searchFilms } from "../pages/initPage.js";

export async function displayFilterMenu(){
    const divForFilters = document.createElement('div');
    divForFilters.className = 'filters-container';
    const yearInput = document.createElement('input')
    yearInput.className = 'search-year'
    yearInput.setAttribute('type','number')
    yearInput.setAttribute('min','1930')
    yearInput.setAttribute('max','2023')
    yearInput.setAttribute('placeholder','year')
    divForFilters.appendChild(yearInput);

    const genresSelector = document.createElement('select');
    genresSelector.setAttribute('name','genre')
    const option = document.createElement('option')
    option.textContent = 'All genres'
    option.setAttribute('value','All genres')
    genresSelector.appendChild(option)

    const possibleGenres = await getGenres()
    for(let genre of possibleGenres.genres){
        const option = document.createElement('option')
        option.setAttribute('value',genre.name)
        option.setAttribute('data-id',genre.id)
        option.textContent = genre.name
        genresSelector.appendChild(option)
    }
    divForFilters.appendChild(genresSelector);
    SECTION.insertBefore(divForFilters, MAIN_CONTENT_DIV)
    
}
export async function renderSearchResults(data){

    if(DIV_FOR_INPUT.children.length > 1){
        DIV_FOR_INPUT.removeChild(UPPER_HEADING)
        DIV_FOR_INPUT.removeChild(LOWER_HEADING)
        DIV_FOR_INPUT.removeChild(SEARCH_BUTTON)
    }
    
    MAIN_CONTENT_DIV.innerHTML = ''; //dont know why for loop doesnt work

        let timeOutToken = 0;
        SEARCH_INPUT.addEventListener('keyup', () => {
            clearTimeout(timeOutToken)
            
            if(SEARCH_INPUT.value.trim().length === 0){
                return;
            }
            timeOutToken = setTimeout(() => {
                searchFilms(SEARCH_INPUT.value)

            }, 1000)

        })

        const genresSelector = document.createElement('select');
        genresSelector.addEventListener('change', () => {
            filterGenreAndYear(data, genresSelector.value, )
          });
        for(const film of data.results){
            const movieCard = document.createElement('div');
            movieCard.className = 'grid-item'
            movieCard.setAttribute('genres',JSON.stringify(film.genre_ids)) //dont need this attribute
            const poster = document.createElement('img');
            poster.className = 'poster'
            let imageUrl;
            
            if(film.backdrop_path === null){
                imageUrl = "./public/img/no-poster.png"
            } else {
                imageUrl = `https://image.tmdb.org/t/p/w400/${film.backdrop_path}`
            }
            poster.src = imageUrl
            poster.setAttribute('alt','poster')
            movieCard.appendChild(poster);
            const filmTitleAndRating = document.createElement('h2')
            filmTitleAndRating.textContent = `${film.original_title}${film.vote_average}`
            movieCard.appendChild(filmTitleAndRating);
            const filmOverview = document.createElement('h3')
            filmOverview.textContent = film.overview
            movieCard.appendChild(filmOverview);

            // const favoritesIcon = document.createElement('img');

            // favoritesIcon.setAttribute('data-info',JSON.stringify(film))
            // favoritesIcon.setAttribute('alt','star icon');
            // favoritesIcon.className = 'video-like'
            // if(favoritesIcon.className === 'clicked'){
            //     favoritesIcon.src = "./public/img/star-selected.png"
            // } else {
            //     favoritesIcon.src = "./public/img/star.png"
            // }
            // movieCard.appendChild(favoritesIcon)

            MAIN_CONTENT_DIV.appendChild(movieCard);

            // favoritesIcon.addEventListener('click', () => 
            // {
            //     if(favoritesIcon.className === 'clicked'){
            //         favoritesIcon.classList.remove('clicked') 
            //     } else {
            //         favoritesIcon.classList.add('clicked')
            //     }
            //     renderSearchResults(data) // need local storage
            // })
            // // favoritesIcon.addEventListener('click', addFavorite)




        }
    }