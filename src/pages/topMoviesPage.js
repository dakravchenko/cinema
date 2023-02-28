import { MAIN_CONTENT_DIV, SECTION } from "../constants.js";
import { getTopMovies } from "../data.js";
import { renderError } from "../views/errorView.js";
import { renderSearchResults } from "../views/resultView.js";

export async function createTopMoviesPage(page){
    SECTION.innerHTML = ''
    MAIN_CONTENT_DIV.innerHTML = ''

    try {  
        const data = await getTopMovies(page);
        renderSearchResults(data)

        const nextButton = document.createElement('button')
    nextButton.className = 'next-page-button pagination-button';
    nextButton.setAttribute('type', 'button')
    nextButton.textContent = 'next'

    const previousButton = document.createElement('button')
    previousButton.className = 'previous-page-button pagination-button';
    previousButton.setAttribute('type', 'button')
    previousButton.textContent = 'previous'

    const paginationButtonsContainer = document.createElement('div')
    paginationButtonsContainer.className = 'pagination-button-container'
    if(page === 1){
        paginationButtonsContainer.appendChild(nextButton) 
    } else if (page === 543) {
        paginationButtonsContainer.appendChild(previousButton)
    } else {
        paginationButtonsContainer.appendChild(previousButton)
        paginationButtonsContainer.appendChild(nextButton)

    }
    
    SECTION.appendChild(paginationButtonsContainer)


    let currentPage = page

    nextButton.addEventListener('click', () => {
        currentPage++;
        createTopMoviesPage(currentPage)
    })
    previousButton.addEventListener('click', () => {
        currentPage--;
        createTopMoviesPage(currentPage)
    })
    } catch (error){
        renderError(error)
    }

    
}