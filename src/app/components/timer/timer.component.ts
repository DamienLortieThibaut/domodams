import { Component } from '@angular/core';
import { TimerService } from '../../services/timer/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {

  // timer that start at current time
  timer = new Date();
  timerInterval: any;

  constructor(private timer_service: TimerService) {
    this.timerInterval = setInterval(() => {
      this.timer = this.timer_service.getCurrentTime();
    }, 1000);
  }

  ngOnDestroy() {
  }

  // HH:MM:SS with leading zeros
  formattedTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
  }

  addHalfHour(): void {
    this.timer_service.addHalfHour();
  }

  substractHalfHour(): void {
    this.timer_service.substractHalfHour();
  }

  addMinute(): void {
    this.timer_service.addMinute();
  }

}
