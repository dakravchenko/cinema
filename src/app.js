import {searchFilms, createStartingPage} from '../src/pages/initPage.js'
import {displayFilterMenu} from './views/resultView.js'
import { SEARCH_INPUT, SEARCH_BUTTON} from './constants.js';

window.addEventListener('load', () => {
    createStartingPage();

    SEARCH_BUTTON.addEventListener('click', () => {
      if(SEARCH_INPUT.value.trim().length === 0){
        return
      }
      SEARCH_INPUT.classList.remove('input-init-page')
      SEARCH_INPUT.classList.add('input-results')
      displayFilterMenu()
      searchFilms(SEARCH_INPUT.value)
     
    })

    SEARCH_BUTTON.addEventListener('keypress', (e) => { ///doesnt work
      if(e.key === 'enter'){
        e.preventDefault();
        SEARCH_BUTTON.click();
       
      }
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



