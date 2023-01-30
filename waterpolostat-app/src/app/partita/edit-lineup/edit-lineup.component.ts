import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-lineup',
  templateUrl: './edit-lineup.component.html'  
})
export class EditLineupComponent implements OnInit {
  @Input() public parentFg: FormArray;
  @Input() public test: string;
  gestioneNumeri: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    console.log(this.parentFg);
    //this.parentFg.controls.push(this.lineupForm);
   }

  ngOnInit(): void {
  }

}
