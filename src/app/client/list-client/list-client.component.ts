import { Component, OnChanges, OnInit } from '@angular/core';
import { IClient } from '../model/iclient';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit , OnChanges {
    clients : IClient[] = [];
    C : ClientService = new ClientService();
    searchText: string = '';

    constructor( private clientService: ClientService) {}

    ngOnInit(): void {
      this.clients = this.clientService.getClients();      
    }

    ngOnChanges(): void {
      this.clients = this.clientService.getClients();      
    }

    deleteClient(id: number){
      this.clientService.deleteClient(id);
      this.clients = this.clientService.getClients();
    }

    rechercheClient(){
      this.clients = this.clientService.rechercheClient(this.searchText);
    }

}
