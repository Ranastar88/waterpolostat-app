import { identifierName } from "@angular/compiler";
import { Guid } from "guid-typescript";
import { Lineup } from "./lineup";

export class Partita{
    id:string;
    nomeSquadraCasa:string;
    nomeSquadraOspiti:string;
    goalCasa:number;
    goalOspiti:number;
    lineupCasa:Lineup[];
    lineupOspiti:Lineup[];
    campionato:string;
    luogo:string;

}