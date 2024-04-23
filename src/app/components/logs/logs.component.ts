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

  async ngOnInit() {
    this.logs = await this.log_service.getLogs();
  }
  

}
