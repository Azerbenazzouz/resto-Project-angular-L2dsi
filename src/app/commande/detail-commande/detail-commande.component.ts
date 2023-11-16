import { Component } from '@angular/core';
import { IClient } from 'src/app/client/model/iclient';
import { Icommande } from '../model/icommande';
import { CommandeService } from '../service/commande.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/client/service/client.service';
import { ProductService } from './../../produit/service/product.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent {
  id : number=0;

  commande : Icommande = {
    id : this.id,
    dateCmd : new Date(),
    etat : 1,
    clientId : 1,
    produitsCmd : [],
    total : 0
  };

  constructor( private commandeService : CommandeService , private clientService : ClientService , private productService : ProductService , private route: ActivatedRoute , private router: Router ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const commande = this.commandeService.getCommandeById(this.id);
    if (commande) {
      this.commande = commande;
    }
  }

  // return client Info
  getClientInfo(id : number){
    const client = this.clientService.getClientsById(id);
    if(client)
      return { nom : client.nom , email : client.email , tel : client.tel};
    return { nom : '' , email : '' , tel : ''};
  }
  
  // return product Info
  getProductInfo(id : number){
    const product = this.productService.getProductById(id);
    if(product)
      return { nom : product.nom , prix : product.prix};
    return { nom : '' , prix : 0};
  }
}
