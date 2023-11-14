import { Injectable } from '@angular/core';
import { IClient } from '../model/iclient';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  getClient: any;
  static getClients(): IClient[] {
    throw new Error('Method not implemented.');
  }
  private clients : IClient[] = [
    { id: 1, 
      nom: 'Lewis hamilton', 
      email: 'Lewis.hamilton@gmail.com',
      password :'lh44',
      tel: '44444444'},
    { id: 2,
      nom: 'Max verstappen', 
      email: 'max.verstappen@gmail.com',
      password :'mv33',
      tel: '33333333'
    },
  ];
  // Get all clients
  getClients = () => {
    return [...this.clients];
  };
  // Get client by id
  getClientsById = (id : number) => {
    return this.clients.find((client) => {
      return client.id === id;
    }
    );
  };
  // Add client
  addClient = (client : IClient) => {
    this.clients.push(client);
  };
  // Delete client
  deleteClient = (id : number) => {
    this.clients = this.clients.filter((client) => {
      return client.id !== id;
    });
  };
  // Update client
  updateClient = (client : IClient) => {
    this.clients = this.clients.map((c) => {
      if (c.id === client.id) {
        return client;
      }
      return c;
    });
  };
  // recherche client
  rechercheClient = (searchText : string) => {
    return this.clients.filter((client) => {
      // search with name and email and tel
      return client.nom.toLowerCase().includes(searchText.toLowerCase()) || client.email.toLowerCase().includes(searchText.toLowerCase()) || client.tel.toLowerCase().includes(searchText.toLowerCase()) ;
    });
  };
  // get new Id
  getNewId = () => {
    if (this.clients.length > 0) {
      return this.clients[this.clients.length - 1].id + 1;
    }
    return 1;
  };
  constructor() { 

  }
}
