import { SECTION, DIV_FOR_INPUT, LOWER_HEADING, MAIN_CONTENT_DIV, SEARCH_BUTTON, UPPER_HEADING } from "../constants.js";

export function renderSearchResults(data){

    if(DIV_FOR_INPUT.children.length > 1){
        DIV_FOR_INPUT.removeChild(UPPER_HEADING)
        DIV_FOR_INPUT.removeChild(LOWER_HEADING)
        DIV_FOR_INPUT.removeChild(SEARCH_BUTTON)
    }
    

    const divForFilters = document.createElement('div');
    divForFilters.className = 'filters-container';
    const yearInput = document.createElement('input')
    yearInput.className = 'search-year'
    yearInput.setAttribute('type','number')
    yearInput.setAttribute('min','1990')
    yearInput.setAttribute('max','2023')
    yearInput.setAttribute('placeholder','year')
    divForFilters.appendChild(yearInput);
    SECTION.insertBefore(divForFilters, MAIN_CONTENT_DIV)


    MAIN_CONTENT_DIV.innerHTML = ''; //dont know why for loop doesnt work

    for(const film of data.results){
        const movieCard = document.createElement('div');
        movieCard.className = 'grid-item'
        const poster = document.createElement('img');
        poster.className = 'poster'
        const imageUrl = `https://image.tmdb.org/t/p/w400/${film.backdrop_path}`
        poster.src = imageUrl
        poster.setAttribute('alt','poster')
        movieCard.appendChild(poster);
        const filmTitleAndRating = document.createElement('h2')
        filmTitleAndRating.textContent = `${film.original_title}                    ${film.vote_average}`
        movieCard.appendChild(filmTitleAndRating);
        const filmOverview = document.createElement('h3')
        filmOverview.textContent = film.overview
        movieCard.appendChild(filmOverview)
        

        MAIN_CONTENT_DIV.appendChild(movieCard)


    }
}