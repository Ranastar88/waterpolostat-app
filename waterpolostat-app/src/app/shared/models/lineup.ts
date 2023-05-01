import { Guid } from "guid-typescript";
import { Ruoli } from "./enum/ruoli";

export class Lineup {
    constructor(num: number) { 
        this.id = Guid.create().toString();
        this.numero = num;
     }
    id:string;
    partitaId:string;
    squadraId:string;
    nome:string;
    numero:number;
    ruolo: Ruoli;
}
