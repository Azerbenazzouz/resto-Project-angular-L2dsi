import { Component } from '@angular/core';
import { IClient } from '../model/iclient';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  client : IClient = {
    id: 0,
    nom: '',
    email: '',
    password: '',
    tel: ''
  };

  constructor( private clientService: ClientService ) { }

  ngOnInit(): void {
  }

  addClient = () => {
    this.client.id = this.clientService.getNewId();
    this.clientService.addClient(this.client);
    this.client = {
      id: this.clientService.getNewId(),
      nom: '',
      email: '',
      password: '',
      tel: ''
    };
  }
}
