import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timer = new Date();
  timerInterval: any;
  accelerationLevel = 1;

  constructor() {
    this.timerInterval = setInterval(() => {
      for(let i = 0; i < this.accelerationLevel; i++) {
        this.timer.setSeconds(this.timer.getSeconds() + 1);
      }
    }, 1000);
  }

  getCurrentTime(): Date {
    return this.timer;
  }

  addHalfHour(): void {
    this.timer.setMinutes(this.timer.getMinutes() + 30);
  }

  substractHalfHour(): void {
    this.timer.setMinutes(this.timer.getMinutes() - 30);
  }

  addMinute(): void {
    this.timer.setMinutes(this.timer.getMinutes() + 1);
  }

  setTime(hours: number, minutes: number): void {
    this.timer.setHours(hours);
    this.timer.setMinutes(minutes);
  }
  
  setSeconds(): void {
    this.timer.setSeconds(this.timer.getSeconds() + 1);
  }
}
