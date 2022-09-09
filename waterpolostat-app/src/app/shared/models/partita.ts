import { Guid } from "guid-typescript";
import { Lineup } from "./lineup";

export interface Partita{
    id:Guid;
    nomeSquadraCasa:string;
    nomeSquadraOspiti:string;
    goalCasa:number;
    goalOspiti:number;
    lineupCasa:Lineup[];
    lineupOspiti:Lineup[];
    campionato:string;
    luogo:string;
}