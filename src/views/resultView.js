import { MAIN_CONTENT_DIV } from "../constants.js";

export function renderSearchResults(data){
    MAIN_CONTENT_DIV.innerHTML = '' //dont know why for loop doesnt work
    for(const film of data.results){
        const div = document.createElement('div');
        div.className = 'grid-item'
        const img = document.createElement('img');
        const imageUrl = `https://image.tmdb.org/t/p/w400/${film.backdrop_path}`
        img.src = imageUrl
        img.setAttribute('alt','poster')
        div.appendChild(img);
        const filmTitle = document.createElement('h2')
        filmTitle.textContent = 'wfdwfewqfeeqf' // to be completed
        MAIN_CONTENT_DIV.appendChild(div)


    }
}