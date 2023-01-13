import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  });

  get id() { return this.partitaForm.get('id') as FormControl; }
  get nomeSquadraCasa() { return this.partitaForm.get('nomeSquadraCasa') as FormControl; }
  get nomeSquadraOspiti() { return this.partitaForm.get('nomeSquadraOspiti') as FormControl; }
  get luogo() { return this.partitaForm.get('luogo') as FormControl; }
  get campionato() { return this.partitaForm.get('campionato') as FormControl; }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
