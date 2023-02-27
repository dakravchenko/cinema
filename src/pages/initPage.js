import { MAIN_CONTENT_DIV, SECTION, UPPER_HEADING, LOWER_HEADING, DIV_FOR_INPUT, SEARCH_BUTTON, SEARCH_INPUT } from "../constants.js";
import { renderSearchResults} from "../views/resultView.js"
import { renderError } from "../views/errorView.js";
export async function createStartingPage(){
    SECTION.innerHTML = ''
    SEARCH_BUTTON.innerHTML = '' // this bug should be fixed another way. need to think later

    UPPER_HEADING.className = 'greeting-text greeting-text-1'
    UPPER_HEADING.textContent = 'Hello THERE!' 
    LOWER_HEADING.className = 'greeting-text greeting-text-2'
    LOWER_HEADING.textContent = 'Would you like to find a movie?'
    
    DIV_FOR_INPUT.className = 'input-container'
    DIV_FOR_INPUT.appendChild(UPPER_HEADING)
    DIV_FOR_INPUT.appendChild(LOWER_HEADING)
   
    SEARCH_INPUT.setAttribute('type', 'text')
    SEARCH_INPUT.className = 'input-init-page'
    SEARCH_INPUT.setAttribute('placeholder', 'Type to find...')


    SEARCH_BUTTON.className = 'movie-search-button'
    SEARCH_BUTTON.setAttribute('type','button')
    const buttonText = document.createElement('h2')
    buttonText.textContent = 'search'
    SEARCH_BUTTON.appendChild(buttonText)
    DIV_FOR_INPUT.appendChild(SEARCH_INPUT)
    DIV_FOR_INPUT.appendChild(SEARCH_BUTTON)
    SECTION.appendChild(DIV_FOR_INPUT)

}

export async function getFilmsByName(query){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=464e0732a4ff7c3b5e09de7baa51e9f2&language=en-US&query=${query}&page=1&include_adult=false`
    const res = await fetch(url)
    if(!res.ok){
        const error = `${res.status} : ${res.statusText}`
        renderError(error)
    }
    const jsonData = await res.json();
    console.log(jsonData) //to be deleted
    renderSearchResults(jsonData)

}

export async function getFilmsWithFilters(year, genre, vote, keyword){
   
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=464e0732a4ff7c3b5e09de7baa51e9f2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&vote_average.gte=${vote}&with_genres=${genre}&with_keywords=${keyword}&with_watch_monetization_types=flatrate`
    const res = await fetch(url)
    if(!res.ok){
        const error = `${res.status} : ${res.statusText}`
        renderError(error)
    }
    const jsonData = await res.json();
    return jsonData
}