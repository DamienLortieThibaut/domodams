import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InstructionService } from '../../services/instructions/instruction.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss'
})
export class InstructionsComponent implements OnInit{

  constructor(private form_builder: FormBuilder, private instruction_service: InstructionService) { }

  instructionForm: any;
  instructions: any;

  ngOnInit(): void {
    this.instructionForm = this.form_builder.group({
      instruction: ['', Validators.required]
    });

    this.instruction_service.getInstructions().subscribe((response) => {
      this.instructions = response;
      this.instructions = this.instructions.instructions;
    });
  }

  saveIntruction() : void {
    this.instruction_service.writeInstructions(this.instructionForm.value).subscribe((response) => {
      this.instruction_service.getInstructions().subscribe((response1) => {
        console.log(response1);
        this.instructions = response;
        this.instructions = this.instructions.instructions;
      });
    });
  }

  update() {
    setTimeout(() => {
     
    }, 1000);
  }
  

}
