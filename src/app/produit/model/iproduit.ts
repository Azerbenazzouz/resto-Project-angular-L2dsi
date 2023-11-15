import { Icategorie } from "./icategorie";

export interface Iproduit {
    id : Number;
    nom : String;
    prix : Number;
    ingredients : String[];
    image : String[];
    categorie : Icategorie;
}
