"use strict";
import { Countdown } from "./countdown.js";

const getNewYear = () => {
  const currentDate = new Date().getFullYear();
  return new Date(`January 01 ${currentDate + 1} 00:00:00`);
};

const year = document.querySelector(".year");
year.innerHTML = getNewYear().getFullYear();

const newYear = getNewYear().getFullYear();

const timerApp = document.querySelector(".countdown-timer");
const message = document.querySelector(".message");
const heading = document.querySelector(".heading");

const format = (num) => {
  return num < 10 ? "0" + num : num;
};

const render = (time) => {
  timerApp.innerHTML = `
      <div class="count-timer">
      <div class = "timer">
      <h2>${format(time.days)}</h2>
      <small>Days</small>
      </div>
      <div class = "timer">
      <h2>${format(time.hours)}</h2>
      <small>Hours</small>
      </div>
      <div class = "timer">
      <h2>${format(time.minutes)}</h2>
      <small>Minutes</small>
      <div class = "timer">
      <h2 >${format(time.seconds)}</h2>
      <small>Seconds</small>
      `;
};

const showMessage = () => {
  message.innerHTML = `Happy New Year ${newYear} !!!`;
  timerApp.innerHTML = "";
  heading.style.display = "none";
};
const hideMessage = () => {
  message.innerHTML = "";
  heading.style.display = "block";
};
const complete = () => {
  showMessage();
  setTimeout(() => {
    hideMessage();
    countDownTimer.setExpiredDate(getNewYear());
  }, 1000 * 60 * 60 * 24);
};

const countDownTimer = new Countdown(getNewYear(), render, complete);
