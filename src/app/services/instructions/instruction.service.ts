import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {

  constructor(private http: HttpClient) { }

  writeInstructions(instructions: any) {
    console.log(instructions);
    return this.http.post('http://localhost:3000/writeInstructions', { instructions });
  }

  getInstructions() {
    return this.http.get('http://localhost:3000/getInstructions');
  }
}
