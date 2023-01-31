import { Guid } from "guid-typescript";
import { Ruoli } from "./enum/ruoli";

export class Lineup {
    constructor(num: number) { 
        this.id = Guid.create();
        this.numero = num;
     }
    id:Guid;
    partitaId:Guid;
    squadraId:Guid;
    nome:string;
    numero:number;
    ruolo: Ruoli;
}
