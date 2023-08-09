"use strict";

let currentTime = [];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  const date = new Date();
  console.log(date);
  currentTime.push(date);
  console.log(currentTime);
  showTimeMove();
  showTime(currentTime);
  currentTime.pop();
  console.log(currentTime);
}

function showTime(timeList) {
  document.querySelector("#clock").innerHTML = "";
  for (const time of timeList) {
    const timeAndDateNow = /*html*/ `${time}`;
    document.querySelector("#clock").insertAdjacentHTML("beforeend", timeAndDateNow);
  }
}

function showTimeMove() {
  const callStartEverySecond = setTimeout(start, 1000);
}
