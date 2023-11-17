import { Component } from '@angular/core';
import { IClient } from '../model/iclient';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';

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

  constructor( private clientService: ClientService , private router : Router) { }

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
    this.router.navigate(['/client']);
  }
}
