import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Partita } from 'src/app/shared/models/partita';

@Component({
  selector: 'app-nuova-partita',
  templateUrl: './nuova-partita.component.html',
  styleUrls: ['./nuova-partita.component.sass']
})
export class NuovaPartitaComponent implements OnInit {
  public fg: FormGroup = this.fb.group((dataItem: Partita) => ({
    id: dataItem.id,
    nomeSquadraCasa: [dataItem.nomeSquadraCasa, [Validators.required, Validators.maxLength(100)]],
    nomeSquadraOspiti: [dataItem.nomeSquadraOspiti, [Validators.required, Validators.maxLength(100)]],
    luogo: [dataItem.luogo, [Validators.maxLength(100)]],
    campionato: [dataItem.campionato, [Validators.maxLength(100)]],
  }));

  constructor(public fb: FormBuilder) { 

  }
  get nomeSquadraCasa():FormControl  { return this.fg.get('nomeSquadraCasa') as FormControl; }
  get nomeSquadraOspiti() { return this.fg.get('nomeSquadraOspiti') as FormControl; }
  get luogo() { return this.fg.get('luogo') as FormControl; }
  get campionato() { return this.fg.get('campionato') as FormControl; }

  ngOnInit(): void {
  }


}
