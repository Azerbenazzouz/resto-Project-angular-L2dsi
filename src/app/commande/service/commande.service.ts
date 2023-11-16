import { Injectable } from '@angular/core';
import { Icommande } from '../model/icommande';
import { Icommandeproduit } from '../model/icommandeproduit';
// import { Iproduit } from '../../produit/model/iproduit';
import { ProductService } from 'src/app/produit/service/product.service';
import { CommandeProduitService } from './commande-produit.service';
@Injectable({
  providedIn: 'root'
})

export class CommandeService {
  public static getCommandes(): Icommande[] {
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
  private commandeProduits1 : Icommandeproduit[] = this.commandeProduitService.getCommandesProduit();
  s : CommandeProduitService = new CommandeProduitService(this.produitService);
  private commandes : Icommande[] = [
    { id: 1,
      dateCmd: new Date('2023-05-07'),
      etat: 1,
      clientId: 1,
      produitsCmd: this.commandeProduitService.getCommandesProduit(),
      total: 0
    },
    { id: 2,
      dateCmd: new Date('2023-05-07'),
      etat: 2,
      clientId: 2,
      produitsCmd: [this.commandeProduits[0], this.commandeProduits[1]],
      total: 0
    },
  ];
  
  // get all commandes
  public getCommandes(): Icommande[] {
    return [...this.commandes];
  }
  // get commande by id
  public getCommandeById(id: number) {
    return this.commandes.find(c => c.id === id);
  }
  // get commande by client id
  public getCommandeByClientId(id: number) {
    return this.commandes.filter(c => c.clientId === id);
  }
  // get commande by etat
  public getCommandeByEtat(etat: number) {
    return this.commandes.filter(c => c.etat === etat);
  }
  // get commande by date
  public getCommandeByDate(date: Date) {
    return this.commandes.filter(c => c.dateCmd === date);
  }
  // get commande by produit
  public getCommandeByProduit(id: number) {
    return this.commandes.filter(c => c.produitsCmd.find(p => p.produitId === id));
  }
  // add commande
  public addCommande(commande: Icommande) {
    this.commandes.push(commande);
  }
  // claculer total commande
  public calculerTotal(commande: Icommande) {
    commande.total = 0;
    for (let produit of commande.produitsCmd) {
      commande.total += produit.prixUnitaire * produit.qte;
    }
  }
  // add produit to commande
  public addProduitToCommande(commande: Icommande, produit: Icommandeproduit) {
    commande.produitsCmd.push(produit);
    this.calculerTotal(commande);
  }
  // change etat commande
  public changeEtat(commande: Icommande, etat: number) {
    commande.etat = etat;
  }
  // update commande
  public updateCommande(commande: Icommande) {
    const index = this.commandes.findIndex(c => c.id === commande.id);
    this.commandes[index] = commande;
  }
  // delete commande
  public deleteCommande(commande: Icommande) {
    const index = this.commandes.findIndex(c => c.id === commande.id);
    this.commandes.splice(index, 1);
  }
  // delete commande by id
  public deleteCommandeById(id: number) {
    const index = this.commandes.findIndex(c => c.id === id);
    this.commandes.splice(index, 1);
  }
  // delete produit from commande
  public deleteProduitFromCommande(commande: Icommande, produit: Icommandeproduit) {
    const index = commande.produitsCmd.findIndex(p => p.produitId === produit.produitId);
    commande.produitsCmd.splice(index, 1);
    this.calculerTotal(commande);
  }
  // set prix unitaire of commande produit
  public setPrixUnitaire(commande: Icommande, produit: Icommandeproduit) {
    produit.prixUnitaire = this.produitService.getPriceOfProduct(produit.produitId) as number;
    this.calculerTotal(commande);
  }
  constructor( private produitService : ProductService , private commandeProduitService : CommandeProduitService ) {
    for (let commande of this.commandes) {
      for(let produit of commande.produitsCmd){
        this.setPrixUnitaire(commande, produit);
      }
      this.calculerTotal(commande);
    }
  }
}
