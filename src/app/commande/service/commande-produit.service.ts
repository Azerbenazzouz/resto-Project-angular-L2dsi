import { Injectable } from '@angular/core';
import { Icommandeproduit } from '../model/icommandeproduit';
import { ProductService } from 'src/app/produit/service/product.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeProduitService {
  public static getCommandesProduit(): Icommandeproduit[] {
    throw new Error('Method not implemented.');
  }
  private commandeProduits : Icommandeproduit[] = [
    { produitId: 1,
      qte: 1,
      prixUnitaire: 0
    },
    { produitId: 2,
      qte: 5,
      prixUnitaire: 44
    }
  ];
  // get commande produit
  public getCommandesProduit(): Icommandeproduit[] {
    return [...this.commandeProduits];
  }
  // add commande produit
  public addCommandeProduit(commandeProduit: Icommandeproduit) {
    this.commandeProduits.push(commandeProduit);
  }
  // delete commande produit
  public deleteCommandeProduit(commandeProduit: Icommandeproduit) {
    this.commandeProduits.splice(this.commandeProduits.indexOf(commandeProduit), 1);
  }
  // update commande produit
  public updateCommandeProduit(commandeProduit: Icommandeproduit) {
    this.commandeProduits[this.commandeProduits.indexOf(commandeProduit)] = commandeProduit;
  }
  // set prix unitaire of commande produit
  public setPrixUnitaire( produit: Icommandeproduit ) {
    produit.prixUnitaire = this.produitService.getPriceOfProduct(produit.produitId) as number;
  }

  constructor( private produitService : ProductService ) { }
}
