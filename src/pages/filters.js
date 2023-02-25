import { renderSearchResults, renderFilterResults } from "../views/resultView.js";

export async function getGenres(){
    const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=464e0732a4ff7c3b5e09de7baa51e9f2&language=en-US")
    const jsonData = await res.json();
    return jsonData
}

export function filterGenreAndYear(data, genreId, year){ 
    console.log(data)
    if(genreId.value === 'All genres' && year === ''){
        renderSearchResults(filteredData)
    } else if(year === '' && genreId.value !== 'All genres' ){
        const filteredData = data.results.filter((film) => String(film.genre_ids).includes(String(genreId.value)) )
        renderFilterResults(filteredData)
    } else if(genreId.value === 'All genres' && year !== ''){ 
        const filteredData = data.results.filter((film) => String(film.release_date).includes(String(year)))
        renderFilterResults(filteredData)
    } else {
        const filteredGenre = data.results.filter((film) => film.genre_ids.includes(genreId.value))
        const filteredData = filteredGenre.filter((film) => String(film.release_date).includes(String(year)))
        renderFilterResults(filteredData)
    }



}
