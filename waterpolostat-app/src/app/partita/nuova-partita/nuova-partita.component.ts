import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Partita } from 'src/app/shared/models/partita';

@Component({
  selector: 'app-nuova-partita',
  templateUrl: './nuova-partita.component.html',
  styleUrls: ['./nuova-partita.component.sass']
})
export class NuovaPartitaComponent implements OnInit {
  public fg!: FormGroup;

  constructor(public fb: FormBuilder) { 

  }

  ngOnInit(): void {
    this.fg = this.fb.group((dataItem: Partita) => ({
      id: dataItem.id,
      nomeSquadraCasa: [dataItem.nomeSquadraCasa, [Validators.required, Validators.maxLength(100)]],
      nomeSquadraOspiti: [dataItem.nomeSquadraOspiti, [Validators.required, Validators.maxLength(100)]]
    }));
  }

}
