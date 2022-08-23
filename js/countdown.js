"use strict";

export class Countdown {
  constructor(expiredDate, renderDate, completeDate) {
    this.setExpiredDate(expiredDate);
    this.renderDate = renderDate;
    this.completeDate = completeDate;
  }

  setExpiredDate(expiredDate) {
    const currentTime = new Date().getTime();
    this.timeRemainingDate = expiredDate.getTime() - currentTime;

    this.timeRemainingDate <= 0 ? this.complete() : this.start();
  }
  complete() {
    if (typeof this.completeDate === "function") {
      this.completeDate();
    }
  }
  start() {
    this.update();
    const intervalId = setInterval(() => {
      this.timeRemainingDate -= 1000;
      if (this.timeRemainingDate < 0) {
        this.complete();
        clearInterval(intervalId);
      } else {
        this.update();
      }
    }, 1000);
  }
  getTime() {
    return {
      days: Math.floor(this.timeRemainingDate / 1000 / 60 / 60 / 24),
      hours: Math.floor((this.timeRemainingDate / 1000 / 60 / 60) % 24),
      minutes: Math.floor((this.timeRemainingDate / 1000 / 60) % 60),
      seconds: Math.floor((this.timeRemainingDate / 1000) % 60),
    };
  }
  update() {
    if (typeof this.renderDate === "function") {
      this.renderDate(this.getTime());
    }
  }
}
