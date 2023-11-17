import { Component } from '@angular/core';
import { CommandeService } from '../service/commande.service';
import { Icommande } from '../model/icommande';
import { ClientService } from 'src/app/client/service/client.service';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent {
    commandes : Icommande[] = [];
    searchText : string = "";
    constructor( private commandeService : CommandeService , private clientService : ClientService) { }

    ngOnInit() {
        this.commandes = this.commandeService.getCommandes();
    }

    // return etat commande from id
    getEtatCommande(id: number) : string {
        switch (id) {
          case 1:
            return 'En cours';
            break;
          case 2:
            return 'En attente';
            break;
          case 3:
            return 'Livré';
            break;
        }
        return '';
    }
    // return clien from id
    getClientName(id : number): string{
        const client = this.clientService.getClientsById(id);
        if(client){
          return client.nom;
        }
        return '';
    }

    // delete commande
    deleteCommande(id : number){
        this.commandeService.deleteCommandeById(id);
        this.commandes = this.commandeService.getCommandes();
    }

    rechercheCommande(){
      if(this.searchText){
        this.commandes = this.commandeService.getCommandes();
        this.commandes = this.commandes.filter( (commande) => {
            return commande.id.toString().match(this.searchText) || this.getClientName(commande.clientId).toLowerCase().match(this.searchText.toLowerCase()) || this.getEtatCommande(commande.etat).toLowerCase().match(this.searchText.toLowerCase());
          }
        );
      }else{
        this.commandes = this.commandeService.getCommandes();
      }
    }
}
