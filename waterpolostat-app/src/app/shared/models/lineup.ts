import { Guid } from "guid-typescript";

export interface Lineup {
    id:Guid;
    partitaId:Guid;
    squadraId:Guid;
    giocatoreId:Guid;
    numero:number;
    nome:string;
}
