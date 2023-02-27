import { MAIN_CONTENT_DIV, SECTION, DISCOVER_FILTERS, DIV_FOR_INPUT } from "../constants.js";
import { renderError } from "../views/errorView.js";
import { renderSearchResults } from "../views/resultView.js";
import { getGenres } from "./filters.js";
import { getData } from "./initPage.js";

export async function createDiscoverPage(){

    DISCOVER_FILTERS.innerHTML = ''

    DISCOVER_FILTERS.className = 'discover-filters grid-container'

    const yearFilter = document.createElement('div')
    yearFilter.className = 'grid-item'  //i dont use this class currently? delete?
    const genresFilter = document.createElement('div')
    genresFilter.className = 'grid-item'
    const voteFilter = document.createElement('div')
    voteFilter.className = 'grid-item'
    const keywordFilter = document.createElement('div')
    keywordFilter.className = 'grid-item'

    const yearFilterField = document.createElement('input')
    yearFilterField.setAttribute('placeholder', 'Year')

    const genresFilterField = document.createElement('select')
    const firstOption = document.createElement('option')
    firstOption.setAttribute('value', null)
    firstOption.textContent = 'All genres'
    genresFilterField.appendChild(firstOption)
    const possibleGenres = await getGenres()
    for(let genre of possibleGenres.genres){
        const option = document.createElement('option')
        option.setAttribute('value',genre.id)
        option.textContent = genre.name
        genresFilterField.appendChild(option)
    }


    const voteFilterField = document.createElement('input')
    voteFilterField.setAttribute('placeholder', 'Average vote')

    const keywordFilterField = document.createElement('input')
    keywordFilterField.setAttribute('placeholder', 'Key word')

    yearFilter.appendChild(yearFilterField)
    genresFilter.appendChild(genresFilterField)
    voteFilter.appendChild(voteFilterField)
    keywordFilter.appendChild(keywordFilterField)

    DISCOVER_FILTERS.appendChild(yearFilter)
    DISCOVER_FILTERS.appendChild(keywordFilter)
    DISCOVER_FILTERS.appendChild(voteFilter)
    DISCOVER_FILTERS.appendChild(genresFilter)

    const applyButton = document.createElement('button');
    applyButton.className = 'apply-button'
    const applyButtonText = document.createElement('h2');
    applyButtonText.textContent = 'apply'
    applyButton.appendChild(applyButtonText)
    applyButton.setAttribute('type','button')
    DISCOVER_FILTERS.appendChild(applyButton)

    SECTION.appendChild(DISCOVER_FILTERS)

    


    

    applyButton.addEventListener('click', async () => {
        const year = yearFilterField.value
        const genre = genresFilterField.value
        const vote = voteFilterField.value
        const keyword = keywordFilterField.value
        try {
            const data = await getData(year, genre, vote, keyword)
        renderSearchResults(data)

        } catch (error) {
            renderError(error)
        }

    })




}