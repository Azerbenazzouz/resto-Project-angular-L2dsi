import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { EditCommandeComponent } from './edit-commande/edit-commande.component';

const routes: Routes = [
  { path: '', component: ListCommandeComponent },
  { path: ':id', component: DetailCommandeComponent },
  { path: 'edit/:id', component: EditCommandeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
