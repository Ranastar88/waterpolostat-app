import { Guid } from "guid-typescript";

export interface PartitaList{
    id:Guid;
    nomeSquadraCasa:string;
    nomeSquadraOspiti:string;
    goalCasa:number;
    goalOspiti:number;
    campionato:string;
    luogo:string;
    localStorageName:string;
}