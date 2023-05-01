import { Component, OnInit } from '@angular/core';
import { FrontendService } from 'src/app/shared/helpers/frontend.service';
import { PartitaList } from 'src/app/shared/models/partitaList';
import { PartiteService } from 'src/app/shared/services/partite.service';

@Component({
  selector: 'app-list-partite',
  templateUrl: './list-partite.component.html'
})
export class ListPartiteComponent implements OnInit {
  public elencoPartite: PartitaList[] = [];
  constructor(public partiteService: PartiteService, public frontedHelper: FrontendService) { }

  ngOnInit(): void {
    this.elencoPartite = this.partiteService.getElencoPartite();
  }

}
