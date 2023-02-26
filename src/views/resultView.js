import { SECTION, DIV_FOR_INPUT, LOWER_HEADING, MAIN_CONTENT_DIV, SEARCH_BUTTON, UPPER_HEADING, SEARCH_INPUT, DISCOVER_FILTERS} from "../constants.js";
import { getGenres } from "../pages/filters.js";
import { searchFilms } from "../pages/initPage.js";


export async function renderSearchResults(data){

    if(DIV_FOR_INPUT.children.length > 1){
        DIV_FOR_INPUT.removeChild(UPPER_HEADING)
        DIV_FOR_INPUT.removeChild(LOWER_HEADING)
        DIV_FOR_INPUT.removeChild(SEARCH_BUTTON)
    }
    DISCOVER_FILTERS.innerHTML = ';'
    
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
        // const yearInput = document.querySelector('.search-year')
        // const genresSelector = document.querySelector('.genres-selector');
        // genresSelector.addEventListener('change', () => {
        //     filterGenreAndYear(data, genresSelector.value, yearInput.value)
        //   });
          
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
    // export function renderFilterResults(data){
    //     MAIN_CONTENT_DIV.innerHTML = ''
    //     console.log(data)

    // }