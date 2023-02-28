import { getFilmsByName } from "./data.js";
import { createStartingPage } from "./pages/initPage.js";
import {
  SEARCH_INPUT,
  SEARCH_BUTTON,
  DISCOVER_PAGE,
  HOME_PAGE,
} from "./constants.js";
import { createDiscoverPage } from "./pages/discoverPage.js";
import { createTopMoviesPage } from "./pages/topMoviesPage.js";

window.addEventListener("load", () => {
  createStartingPage();

  SEARCH_BUTTON.addEventListener("click", () => {
    if (SEARCH_INPUT.value.trim().length === 0) {
      return;
    }
    SEARCH_INPUT.classList.remove("input-init-page");
    SEARCH_INPUT.classList.add("input-results");
    getFilmsByName(SEARCH_INPUT.value);
  });

  DISCOVER_PAGE.addEventListener("click", () => {
    createDiscoverPage();
  });
  HOME_PAGE.addEventListener("click", createStartingPage);

  const logo = document.querySelector(".logo");
  logo.addEventListener("click", createStartingPage);

  const topMovies = document.querySelector(".top-movies");

  topMovies.addEventListener("click", () => {
    createTopMoviesPage(1);
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
});
