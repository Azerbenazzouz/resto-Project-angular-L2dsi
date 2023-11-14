import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { FormsModule } from '@angular/forms';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { EditCommandeComponent } from './edit-commande/edit-commande.component';


@NgModule({
  declarations: [
    ListCommandeComponent,
    DetailCommandeComponent,
    EditCommandeComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    FormsModule
  ]
})
export class CommandeModule { }
