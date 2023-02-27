import { SECTION, DIV_FOR_INPUT,MAIN_CONTENT_DIV, SEARCH_INPUT} from "../constants.js";
import {getFilmsByName } from "../data.js";


export async function renderSearchResults(data){

    SECTION.innerHTML = ''
    MAIN_CONTENT_DIV.innerHTML = ''
    DIV_FOR_INPUT.innerHTML = ''

    DIV_FOR_INPUT.appendChild(SEARCH_INPUT)
    SECTION.insertBefore(DIV_FOR_INPUT, null)


        let timeOutToken = 0;
        SEARCH_INPUT.addEventListener('keyup', () => {
            clearTimeout(timeOutToken)
            
            if(SEARCH_INPUT.value.trim().length === 0){
                return;
            }
            timeOutToken = setTimeout(() => {
                getFilmsByName(SEARCH_INPUT.value)

            }, 1000)

        })
        if(data.results.length === 0){
            const errorText = document.createElement('h2')
            errorText.textContent = 'Ooops. We recommend you to check the filters or enter another movie title...'
            errorText.className = 'search-error'
            SECTION.appendChild(errorText)
        }  
        for(const film of data.results){
            const movieCard = document.createElement('div');
            movieCard.className = 'film-container'
            const poster = document.createElement('img');
            poster.className = 'poster'
            let imageUrl;
            
            if(film.backdrop_path === null){
                imageUrl = "./public/img/no-poster.png"
            } else {
                imageUrl = `https://image.tmdb.org/t/p/w500/${film.backdrop_path}`
            }
            poster.src = imageUrl
            poster.setAttribute('alt','poster')
            movieCard.appendChild(poster);
            const filmTitleAndRating = document.createElement('h2')
            
            const releaseDate = new Date(film.release_date)
            const releaseYear = releaseDate.getFullYear(film.release_date)

            let voteAverage
            if(film.vote_average === 0){
                voteAverage = ''
            } else {
                voteAverage = film.vote_average
            }
            filmTitleAndRating.textContent = `${film.original_title} (${releaseYear}) ${voteAverage}`
            movieCard.appendChild(filmTitleAndRating);
            const filmOverview = document.createElement('h3')
            if(film.overview === ''){
                filmOverview.textContent = 'Oops no description yet. Perhaps this movie will be described soon'
            } else {
                filmOverview.textContent = film.overview

            }
            movieCard.appendChild(filmOverview);

            MAIN_CONTENT_DIV.appendChild(movieCard);
            SECTION.appendChild(MAIN_CONTENT_DIV)





        }
    }
