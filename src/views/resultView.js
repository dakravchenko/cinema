import { SECTION, DIV_FOR_INPUT, LOWER_HEADING, MAIN_CONTENT_DIV, SEARCH_BUTTON, UPPER_HEADING, SEARCH_INPUT, DISCOVER_FILTERS} from "../constants.js";
import { getGenres } from "../pages/filters.js";
import { searchFilms } from "../pages/initPage.js";


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
                searchFilms(SEARCH_INPUT.value)

            }, 1000)

        })
          
        for(const film of data.results){
            const movieCard = document.createElement('div');
            movieCard.className = 'film-container'
            movieCard.setAttribute('genres',JSON.stringify(film.genre_ids)) //dont need this attribute
            const poster = document.createElement('img');
            poster.className = 'poster'
            let imageUrl;
            
            if(film.backdrop_path === null){
                imageUrl = "./public/img/no-poster.png"
            } else {
                imageUrl = `https://image.tmdb.org/t/p/w400/${film.backdrop_path}`
            }
            poster.src = imageUrl
            poster.setAttribute('alt','poster')
            movieCard.appendChild(poster);
            const filmTitleAndRating = document.createElement('h2')
            filmTitleAndRating.textContent = `${film.original_title}${film.vote_average}`
            movieCard.appendChild(filmTitleAndRating);
            const filmOverview = document.createElement('h3')
            filmOverview.textContent = film.overview
            movieCard.appendChild(filmOverview);

            MAIN_CONTENT_DIV.appendChild(movieCard);
            SECTION.appendChild(MAIN_CONTENT_DIV)





        }
    }
