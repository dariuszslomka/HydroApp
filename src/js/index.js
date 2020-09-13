import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

let counter = getGlassCounter();
if(counter)
{
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
  let glassCounter = localStorage.getItem("glassCounter");
  if (glassCounter) {
    return parseInt(glassCounter);
  } else {
    return 0;
  }
}

function setGlassCounter(glassNumber) {
  localStorage.setItem("glassCounter", glassNumber);
  refreshGlassNumber(glassNumber);
}
