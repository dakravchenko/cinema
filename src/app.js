import {searchFilms, createStartingPage} from '../src/pages/initPage.js'

window.addEventListener('load', () => {
    createStartingPage();

    const searchFieldElement = document.querySelector('input')
    let timeOutToken = 0;
    searchFieldElement.addEventListener('keyup', () => {
        clearTimeout(timeOutToken)
        
        if(searchFieldElement.value.trim().length === 0){
            return;
        }
        timeOutToken = setTimeout(() => {
            searchFilms(searchFieldElement.value)
        }, 500)

    })

})



