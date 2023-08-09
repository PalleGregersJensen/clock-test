"use strict";

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  const date = new Date();
    console.log(date);
    const timeAndDateNow = /*html*/
        `${date}`;
    document.querySelector("#clock").insertAdjacentHTML("beforeend", timeAndDateNow);
}
