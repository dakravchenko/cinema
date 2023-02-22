import { renderSearchResults } from "../views/resultView.js"

export async function searchFilms(query){
    const url = `https://1api.themoviedb.org/3/search/movie?api_key=464e0732a4ff7c3b5e09de7baa51e9f2&language=en-US&query=${query}&page=1&include_adult=false`
    const res = await fetch(url)
    if(!res.ok){
        const error = `${res.status} : ${res.statusText}`
        renderError(error)
    }
    const jsonData = await res.json();
    console.log(jsonData) //to be deleted
    renderSearchResults(jsonData)

}
