import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

// Скрипты для карусели и смены темы

let currentTheme = 1;

let styleThemes = [
  {
    number: 1,
    style: "theme--1"
  },
  {
    number: 2,
    style: "theme--2"
  },
  {
    number: 3,
    style: "theme--3"
  },
];

function changeTheme(currentTheme, styleThemes) {
  let changeButtons = document.querySelectorAll(".carousel__btn-switch");
  let carauselItems = document.querySelectorAll(".carousel__item");
  for (let i = 0; i < changeButtons.length; i++) {
    changeButtons[i].addEventListener("click", function() {
      let body = document.querySelector("body");
      body.classList.remove(styleThemes[currentTheme - 1].style);
      carauselItems[currentTheme - 1].classList.remove("carousel__item--active");
      changeButtons[currentTheme - 1].classList.remove("carousel__btn--active");
      currentTheme = styleThemes[i].number;
      body.classList.add(styleThemes[i].style);
      carauselItems[i].classList.add("carousel__item--active");
      changeButtons[i].classList.add("carousel__btn--active");
    })
  }
}


changeTheme(currentTheme, styleThemes);
