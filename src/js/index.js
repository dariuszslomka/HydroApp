import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

let counter = getGlassCounter();
if (counter) {
  refreshGlassNumber(counter);
}

let addButton = document.querySelector(".add-button--js");
addButton.addEventListener("click", () => {
  let counter = getGlassCounter();
  setGlassCounter(++counter);
});

let removeButton = document.querySelector(".remove-button--js");
removeButton.addEventListener("click", () => {
  let counter = getGlassCounter();
  if (counter == 0) {
    return;
  }
  setGlassCounter(--counter);
});

function refreshGlassNumber(glassNumber) {
  let counterText = document.querySelector(".glass__number--js");
  counterText.innerHTML = glassNumber;
}

function getGlassCounter() {
  const todayCounter = new Date().toISOString().slice(0, 10);
  let glassCounter = localStorage.getItem(todayCounter);
  if (glassCounter) {
    return parseInt(glassCounter);
  } else {
    return 0;
  }
}

function setGlassCounter(glassNumber) {
  const todayCounter = new Date().toISOString().slice(0, 10);
  localStorage.setItem(todayCounter, glassNumber);
  refreshGlassNumber(glassNumber);
  animateGlass();
  animateWater();
}

function animateGlass() {
    let glass = document.querySelector(".glass--js");
    glass.classList.add('glass--animated');
    setTimeout(function() { glass.classList.remove('glass--animated'); }, 1000);   

}

function animateWater()
{
    let waterImage = document.querySelector(".water-image--js");
    waterImage.classList.add('water-image--animated');
    setTimeout(function() { waterImage.classList.remove('water-image--animated'); }, 1000);   
}
