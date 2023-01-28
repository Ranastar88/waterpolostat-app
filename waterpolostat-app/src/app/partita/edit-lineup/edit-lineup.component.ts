import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-lineup',
  templateUrl: './edit-lineup.component.html'  
})
export class EditLineupComponent implements OnInit {
  @Input() public parentFg: FormArray;
  public lineupForm: FormGroup = this.formBuilder.group({
    numero: ['', [Validators.required]],
    nome: ['', [Validators.required, Validators.maxLength(100)]],
    ruolo: ['', [Validators.required]]
  });
  gestioneNumeri: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    //this.parentFg.controls.push(this.lineupForm);
    //this.parentFg.controls.push(this.lineupForm);
   }

  ngOnInit(): void {
  }

}
