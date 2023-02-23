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
        }, 1000)

    })
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    })
    
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }))
})



