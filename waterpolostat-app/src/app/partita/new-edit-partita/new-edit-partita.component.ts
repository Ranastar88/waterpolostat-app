import { FormatWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationInputService } from 'src/app/shared/helpers/validation-input.service';
import { Lineup } from 'src/app/shared/models/lineup';
import { Partita } from 'src/app/shared/models/partita';

@Component({
  selector: 'app-new-edit-partita',
  templateUrl: './new-edit-partita.component.html'
})
export class NewEditPartitaComponent implements OnInit {
  public partitaForm: FormGroup = this.formBuilder.group({
    id: '',
    nomeSquadraCasa: ['', [Validators.required, Validators.maxLength(100)]],
    nomeSquadraOspiti: ['', [Validators.required, Validators.maxLength(100)]],
    luogo: ['', [Validators.maxLength(100)]],
    campionato: ['', [Validators.maxLength(100)]],
    lineupCasa: new FormArray([])
  });

  lineupFg = (data:Lineup) => ({
    numero: [data.numero, [Validators.required]],
    nome: ['', [Validators.required, Validators.maxLength(100)]],
    ruolo: ['', [Validators.required]]
  });

  get id() { return this.partitaForm.get('id') as FormControl; }
  get nomeSquadraCasa() { return this.partitaForm.get('nomeSquadraCasa') as FormControl; }
  get nomeSquadraOspiti() { return this.partitaForm.get('nomeSquadraOspiti') as FormControl; }
  get luogo() { return this.partitaForm.get('luogo') as FormControl; }
  get campionato() { return this.partitaForm.get('campionato') as FormControl; }
  get lineupCasa() { return this.partitaForm.get('lineupCasa') as FormArray; }

  constructor(private formBuilder: FormBuilder, public validationHelper: ValidationInputService) { }

  ngOnInit(): void {
    for (let index = 0; index < 14; index++) {      
      this.lineupCasa.push(this.formBuilder.group(this.lineupFg(new Lineup(index+1))));
    }
  }

}
