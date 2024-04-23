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
  rangeValue: number;


  constructor(private timer_service: TimerService) {

  }

  ngOnInit() {
    this.setRangeValue();
    this.timerInterval = setInterval(() => {
      this.timer.setSeconds(this.timer.getSeconds() + 1);
      this.setRangeValue();
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
    this.timer.setMinutes(this.timer.getMinutes() + 30);
    this.timer_service.addHalfHour();
  }

  substractHalfHour(): void {
    this.timer.setMinutes(this.timer.getMinutes() - 30);
    this.timer_service.substractHalfHour();
  }

  updateTimer(event: Event) {
    const minutes = parseInt((event.target as HTMLInputElement).value, 10);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    this.timer.setHours(hours);
    this.timer.setMinutes(remainingMinutes);
    this.timer_service.setTime(hours, remainingMinutes);
  }

  setRangeValue() {
    const hours = this.timer.getHours();
    const minutes = this.timer.getMinutes();
    this.rangeValue = hours * 60 + minutes;
  }

}
