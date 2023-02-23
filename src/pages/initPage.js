import { HEADER } from "../constants.js";
import { renderSearchResults} from "../views/resultView.js"

export async function createStartingPage(){

    // const input = document.createElement('input');
    // input.setAttribute('type', 'text')
    // input.className = 'movie-search-input'
    // HEADER.appendChild(input)
    const logo = document.createElement('img');
    logo.src = '\public\img\moviedb-logo.svg'
    logo.setAttribute('alt', 'logo')
    logo.className = 'logo'
    HEADER.appendChild(logo)

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
