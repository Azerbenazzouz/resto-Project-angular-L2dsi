import { Icommandeproduit } from "./icommandeproduit";

export enum enumEtat {
    confirmer = 1,
    livree = 2,
    annuler = 3
}
export interface Icommande {
    id : number;
    dateCmd : Date;
    etat : enumEtat;
    clientId : number;
    produitsCmd : Icommandeproduit[];
    total : number;
}
