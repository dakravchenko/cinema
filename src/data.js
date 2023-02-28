import { renderSearchResults } from "./views/resultView.js"
import { renderError } from "./views/errorView.js"

export async function getFilmsByName(query){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=464e0732a4ff7c3b5e09de7baa51e9f2&language=en-US&query=${query}&page=1&include_adult=false`
    try {
    const res = await fetch(url)
    if(!res.ok){
        throw new Error('HTTP error')
    }
    const jsonData = await res.json();
        renderSearchResults(jsonData)  
    } catch (error) {
        renderError(error)
    }

}

export async function getFilmsWithFilters(year, genre, vote, keyword){
   
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=464e0732a4ff7c3b5e09de7baa51e9f2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&vote_average.gte=${vote}&with_genres=${genre}&with_keywords=${keyword}&with_watch_monetization_types=flatrate`
    try{const res = await fetch(url)
        if(!res.ok){
            throw new Error('HTTP error')
        }
        const jsonData = await res.json();
        return jsonData
    } catch (error) {
        renderError(error)
    }
    
}

export async function getGenres(){
    try{
        const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=464e0732a4ff7c3b5e09de7baa51e9f2&language=en-US")
        if(!res.ok){
            throw new Error('HTTP error')
        }
        const jsonData = await res.json();
        return jsonData
    } catch (error){
        renderError(error)
    }
}

export async function getTopMovies(page){
    try { 
        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=464e0732a4ff7c3b5e09de7baa51e9f2&language=en-US&page=${page}`)
    if(!res.ok){
        throw new Error('HTTP error')
    } 
    const jsonData = await res.json();
    return jsonData
    } catch (error) {
        renderError(error)
    }

}