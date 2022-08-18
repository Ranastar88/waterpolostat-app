import { Guid } from "guid-typescript";
import { Lineup } from "./lineup";

interface Partita{
    id:Guid;
    nomeSquadraCasa:string;
    nomeSquadraOspiti:string;
    goalCasa:number;
    goalOspiti:number;
    lineupCasa:Lineup[];
    lineupOspiti:Lineup[];
}