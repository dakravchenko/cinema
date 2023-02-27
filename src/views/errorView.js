import { MAIN_CONTENT_DIV, SECTION } from "../constants.js";

export async function renderError(error){
    SECTION.innerHTML = ''
    MAIN_CONTENT_DIV.innerHTML = ''
    const text = document.createElement('h1')
    text.textContent = error
    SECTION.appendChild(text)

}
