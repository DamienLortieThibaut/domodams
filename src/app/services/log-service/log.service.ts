import { Injectable } from '@angular/core';
import { Log } from '../../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[] = [
    {
      text: 'This is a log message',
      created_at: new Date()
    }
  ];

  constructor() { }

  addLog(log: Log) {
    this.logs.push(log);
  };

  getLogs() {
    return this.logs;
  }; 
}
