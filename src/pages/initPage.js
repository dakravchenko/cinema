import {SECTION, UPPER_HEADING, LOWER_HEADING, DIV_FOR_INPUT, SEARCH_BUTTON, SEARCH_INPUT } from "../constants.js";
export async function createStartingPage(){
    SECTION.innerHTML = ''
    SEARCH_BUTTON.innerHTML = ''

    UPPER_HEADING.className = 'greeting-text greeting-text-1'
    UPPER_HEADING.textContent = 'Hello THERE!' 
    LOWER_HEADING.className = 'greeting-text greeting-text-2'
    LOWER_HEADING.textContent = 'Would you like to find a movie?'
    
    DIV_FOR_INPUT.className = 'input-container'
    DIV_FOR_INPUT.appendChild(UPPER_HEADING)
    DIV_FOR_INPUT.appendChild(LOWER_HEADING)
   
    SEARCH_INPUT.setAttribute('type', 'text')
    SEARCH_INPUT.className = 'input-init-page'
    SEARCH_INPUT.setAttribute('placeholder', 'Type to find...')


    SEARCH_BUTTON.className = 'movie-search-button'
    SEARCH_BUTTON.setAttribute('type','button')
    const buttonText = document.createElement('h2')
    buttonText.textContent = 'search'
    SEARCH_BUTTON.appendChild(buttonText)
    DIV_FOR_INPUT.appendChild(SEARCH_INPUT)
    DIV_FOR_INPUT.appendChild(SEARCH_BUTTON)
    SECTION.appendChild(DIV_FOR_INPUT)

}
