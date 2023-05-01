import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Partita } from '../models/partita';
import { PartitaList } from '../models/partitaList';

@Injectable({
  providedIn: 'root'
})
export class PartiteService {
  private LOCALSTORAGE: string = "PartiteList";
  private partiteList: PartitaList[] = [];

  constructor() { 
    this.updatefromlocaldb();
  }

  public creaPartita(partita: Partita):string{
    partita.id = Guid.create().toString();
    var partitalist:PartitaList = {...partitalist,...partita};
    partitalist.localStorageName = "Partita_" + partita.id.toString();
    localStorage.setItem(partitalist.localStorageName, JSON.stringify(partita));
    this.partiteList.push(partitalist);
    this.saveonlocaldb();
    return partita.id;
  }

  
  public getPartita(id: string):Partita{
    let local_p = localStorage.getItem("Partita_" + id);
    if(!local_p) return null;
    return JSON.parse(local_p) as Partita;
  }

  public getElencoPartite(): PartitaList[]{
    return this.partiteList;
  }
  
  public getPartitaById(id: Guid):Partita{
    var partitajson = localStorage.getItem("Partita_" + id.toString());
    if(!partitajson) return null;    
    return JSON.parse(partitajson) as Partita;
  }

  private updatefromlocaldb():void{
    var localdb = localStorage.getItem(this.LOCALSTORAGE);
    if(!localdb){
      localStorage.setItem(this.LOCALSTORAGE, JSON.stringify(this.partiteList));
    } else{
      this.partiteList = JSON.parse(localdb);
    }    
  }
  private saveonlocaldb():void{
      localStorage.setItem(this.LOCALSTORAGE, JSON.stringify(this.partiteList));
  }
}
