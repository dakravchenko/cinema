import { HEADER, MAIN_CONTENT_DIV } from "../constants.js";
import { renderSearchResults} from "../views/resultView.js"

export async function createStartingPage(){

    const divForLogo = document.querySelector('.nav-logo')
    const logo = document.createElement('img');
    logo.src = "./public/img/moviedb-logo.svg"
    logo.setAttribute('alt', 'logo')
    logo.className = 'logo'
    divForLogo.appendChild(logo)


    const upperHeading = document.createElement('h1')
    upperHeading.className = 'greeting-text'
    upperHeading.textContent = 'Hello THERE!' 
    const lowerHeading = document.createElement('h1')
    lowerHeading.className = 'greeting-text'
    lowerHeading.textContent = 'Would you like to find a movie?'
    const divForInput = document.createElement('div');
    divForInput.className = 'input-container'
    const inputSearch = document.createElement('input');
    inputSearch.setAttribute('type', 'text')
    inputSearch.className = 'movie-search-input'
    divForInput.appendChild(inputSearch)
    MAIN_CONTENT_DIV.appendChild(upperHeading)
    MAIN_CONTENT_DIV.appendChild(lowerHeading)
    MAIN_CONTENT_DIV.appendChild(divForInput)

}

export async function searchFilms(query){
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
