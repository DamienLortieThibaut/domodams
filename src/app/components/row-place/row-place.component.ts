import { Component, Input, OnInit  } from '@angular/core';
import { Place } from '../../models/place';
import { TimerService } from '../../services/timer/timer.service';
import { LogService } from '../../services/log-service/log.service';
import { Log } from '../../models/log';

@Component({
  selector: 'app-row-place',
  templateUrl: './row-place.component.html',
  styleUrl: './row-place.component.scss'
})
export class RowPlaceComponent implements OnInit{
  @Input() place: Place;

  interval: any;
  currentState: boolean = false;

  constructor(
    private timer_service: TimerService,
    private log_service: LogService
  ) {
   
  }

  ngOnInit(): void {
    setInterval(() => {
     this.update();
    }, 1000);
  }

  update(): void {
    let currentDate = this.timer_service.getCurrentTime();

    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();

    this.place.actions.forEach(action => {

      let startTime = action.startdAt.getHours() + ":" + action.startdAt.getMinutes();
      let endTime = action.endAt.getHours() + ":" + action.endAt.getMinutes();

      console.log(currentTime >= startTime && currentTime <= endTime)
      if (currentTime >= startTime && currentTime <= endTime) {
        if(!this.currentState) {
          let log: Log = {
            text: "Allumage de " + this.place.name + " à " + new Date().getHours() + ":" + new Date().getMinutes(),
            created_at: currentDate
          }
  
          this.log_service.addLog(log);
        }
        this.currentState = action.isActived;
        
       
      } else {
        if(this.currentState) {
          
          this.currentState = false;
          let log: Log = {
            text: "Extinction de " + this.place.name + " à " + new Date().getHours() + ":" + new Date().getMinutes(),
            created_at: currentDate
          }

          this.log_service.addLog(log);
        }
        
      }
    });
  }
}
