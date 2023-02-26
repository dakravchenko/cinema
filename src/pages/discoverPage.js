import { MAIN_CONTENT_DIV, SECTION } from "../constants.js";
import { renderSearchResults } from "../views/resultView.js";
import { getGenres } from "./filters.js";
import { getData } from "./initPage.js";

export async function createDiscoverPage(){
    MAIN_CONTENT_DIV.innerHTML = '';

    const discoverFilters = document.createElement('div')
    discoverFilters.className = 'discover-filters grid-container'

    const yearFilter = document.createElement('div')
    yearFilter.className = 'grid-item'
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

    discoverFilters.appendChild(yearFilter)
    discoverFilters.appendChild(genresFilter)
    discoverFilters.appendChild(voteFilter)
    discoverFilters.appendChild(keywordFilter)

    SECTION.insertBefore(discoverFilters, MAIN_CONTENT_DIV)

    const applyButton = document.createElement('button');
    const applyButtonText = document.createElement('h3');
    applyButtonText.textContent = 'apply'
    applyButton.appendChild(applyButtonText)
    applyButton.setAttribute('type','button')



    SECTION.insertBefore(applyButton, MAIN_CONTENT_DIV)

    applyButton.addEventListener('click', async () => {
        const year = yearFilterField.value || ''
        const genre = genresFilterField.value || ''
        const vote = voteFilterField.value || ''
        const keyword = keywordFilterField.value || ''
        const data = await getData(year, genre, vote, keyword)
        renderSearchResults(data)

    })




}