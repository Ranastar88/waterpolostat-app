import { Guid } from "guid-typescript";
import { Ruoli } from "./enum/ruoli";

export class Lineup {
    id:Guid;
    partitaId:Guid;
    squadraId:Guid;
    nome:string;
    numero:number;
    ruolo: Ruoli;
}
