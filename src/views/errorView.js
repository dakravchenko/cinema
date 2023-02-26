import { MAIN_CONTENT_DIV, SECTION } from "../constants.js";

export async function renderError(error){
    MAIN_CONTENT_DIV.innerHTML = ''
    const text = document.createElement('h1')
    text.textContent = error
    SECTION.insertBefore(text, MAIN_CONTENT_DIV)

}
