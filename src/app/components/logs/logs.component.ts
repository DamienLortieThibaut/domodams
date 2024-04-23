import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log-service/log.service';
import { Log } from '../../models/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss'
})
export class LogsComponent implements OnInit {

  logs: Log[];

  constructor(private log_service: LogService) { }

   ngOnInit() {
    this.logs = this.log_service.getLogs();
    setInterval( () => {
      this.logs = this.log_service.getLogs();
    }, 60000)
  }

  // DD/MM/YYYY HH:MM:SS with leading zeros
  formattedDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  

}
