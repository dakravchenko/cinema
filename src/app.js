import {getFilmsByName, createStartingPage} from '../src/pages/initPage.js'
import { SEARCH_INPUT, SEARCH_BUTTON, DISCOVER_PAGE, HOME_PAGE, SECTION} from './constants.js';
import { createDiscoverPage } from './pages/discoverPage.js';

window.addEventListener('load', () => {
    createStartingPage();

    SEARCH_BUTTON.addEventListener('click', () => {
      if(SEARCH_INPUT.value.trim().length === 0){
        return
      }
      SEARCH_INPUT.classList.remove('input-init-page')
      SEARCH_INPUT.classList.add('input-results')
      getFilmsByName(SEARCH_INPUT.value)
     
    })

    SEARCH_BUTTON.addEventListener('keypress', (e) => { ///doesnt work
      if(e.key === 'enter'){
        e.preventDefault();
        SEARCH_BUTTON.click();
       
      }
    })

    DISCOVER_PAGE.addEventListener('click', () => {
      SECTION.innerHTML = ''
      createDiscoverPage();
    }
    )
    HOME_PAGE.addEventListener('click', createStartingPage)

    const logo = document.querySelector('.logo')
    logo.addEventListener('click', createStartingPage)




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



