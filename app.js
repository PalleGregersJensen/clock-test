"use strict";

let currentTime = [];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  let date = new Date();
  date = String(date);
  console.log(date);
  let weekday = date.slice(0, 3);
  console.log(weekday);
  let justDate = date.slice(4, 15);
  console.log(justDate);
  let time = date.slice(16, 24);
  console.log(time);
  let newDate = createNewDate(weekday, justDate, time)
  console.log(newDate);
  currentTime.push(newDate);
  console.log(currentTime);
  showTimeMove();
  showTime(currentTime);
  currentTime.pop();
  console.log(currentTime);
}

function showTime(timeList) {
  document.querySelector("#clock").innerHTML = "";
  for (const object of timeList) {
    if (object.weekday === "Thu") {
      object.weekday =  "Thursday"
    }
    const timeAndDateNow = /*html*/ `${object.date} <br> ${object.weekday} <br> ${object.time}`;
    document.querySelector("#clock").insertAdjacentHTML("beforeend", timeAndDateNow);
  }
}

function showTimeMove() {
  const callStartEverySecond = setTimeout(start, 1000);
}

function createNewDate(weekday, justDate, time) {
  const newDate = {
    weekday: weekday,
    date: justDate,
    time: time
  }
  console.log(newDate);
  return newDate
}