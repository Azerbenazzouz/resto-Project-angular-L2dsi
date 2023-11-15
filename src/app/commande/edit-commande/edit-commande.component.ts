import { Component } from '@angular/core';
import { Icommande } from '../model/icommande';
import { CommandeService } from './../service/commande.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-commande',
  templateUrl: './edit-commande.component.html',
  styleUrls: ['./edit-commande.component.css']
})
export class EditCommandeComponent {
    id : number = 0;
    commande : Icommande ={
      id : this.id,
      dateCmd : new Date(),
      etat : 1,
      clientId : 1,
      produitsCmd : [],
      total : 0
    };
    constructor( private commandeService : CommandeService , private route: ActivatedRoute , private router: Router) { }
    
    ngOnInit() {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      const commande = this.commandeService.getCommandeById(this.id);
      if (commande) {
        this.commande = commande;
      }
    }
}
