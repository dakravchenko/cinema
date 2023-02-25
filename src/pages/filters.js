export async function getGenres(){
    const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=464e0732a4ff7c3b5e09de7baa51e9f2&language=en-US")
    const jsonData = await res.json();
    return jsonData
}

export function filterGenreAndYear(data, genreId, year){ //data.results
    if(genreId.value === 'All genres' && year === undefined){
        renderSearchResults(data)
    } else if(year === undefined){
        const filteredData = data.results.map((film) => film.genre_ids.contains(genreId.value) )
        renderSearchResults(filteredData)
    } else if(genreId.value === 'All genres'){ 
        const filteredData = data.results.map((film) => String(film.release_date).contains(String(year)))
        renderSearchResults(filteredData)
    } else {
        const filteredGenre = data.results.map((film) => film.genre_ids.contains(genreId.value))
        const filteredData = filteredGenre.map((film) => String(film.release_date).contains(String(year)))
        renderSearchResults(filteredData)
    }



}
