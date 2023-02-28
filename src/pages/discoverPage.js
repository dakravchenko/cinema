import { SECTION, DISCOVER_FILTERS} from "../constants.js";
import { renderSearchResults } from "../views/resultView.js";
import { getFilmsWithFilters, getGenres } from "../data.js";

export async function createDiscoverPage(){

    DISCOVER_FILTERS.innerHTML = ''
    SECTION.innerHTML = ''

    DISCOVER_FILTERS.className = 'discover-filters grid-container'

    const yearFilter = document.createElement('div')
    const genresFilter = document.createElement('div')
    const voteFilter = document.createElement('div')
    const keywordFilter = document.createElement('div')

    const yearFilterField = document.createElement('input')
    yearFilterField.className = 'filter'
    yearFilterField.setAttribute('placeholder', 'Year')
    yearFilterField.setAttribute('type','number')
    yearFilterField.setAttribute('min', '1900')
    yearFilterField.setAttribute('max','2026')
    yearFilterField.setAttribute('step', '1')


    const genresFilterField = document.createElement('select')
    genresFilterField.className = 'filter'
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
    voteFilterField.className = 'filter'
    voteFilterField.setAttribute('placeholder', 'Average vote')
    voteFilterField.setAttribute('type','number')
    voteFilterField.setAttribute('min', '0')
    voteFilterField.setAttribute('max','10')
    voteFilterField.setAttribute('step', '1')

    const keywordFilterField = document.createElement('input')
    keywordFilterField.className = 'filter'
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
    applyButton.className = 'apply-button filter'
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
        
            const data = await getFilmsWithFilters(year, genre, vote, keyword)
        renderSearchResults(data)

       

    })

}