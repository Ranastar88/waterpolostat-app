import { Component, OnInit } from '@angular/core';
import { PartitaList } from 'src/app/shared/models/partitaList';
import { PartiteService } from 'src/app/shared/services/partite.service';

@Component({
  selector: 'app-list-partite',
  templateUrl: './list-partite.component.html'
})
export class ListPartiteComponent implements OnInit {
  public elencoPartite: PartitaList[] = [];
  constructor(public partiteService: PartiteService) { }

  ngOnInit(): void {
    this.elencoPartite = this.partiteService.getElencoPartite();
  }

}
