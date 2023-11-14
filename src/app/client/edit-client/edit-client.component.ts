import { Component, OnInit } from '@angular/core';
import { IClient } from '../model/iclient';
import { ClientService } from '../service/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})

export class EditClientComponent implements OnInit {
  id : number = 0;
  client : IClient = {
    id: this.id,
    nom: '',
    email: '',
    password: '',
    tel: ''
  };


  constructor(private clientService: ClientService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const client = this.clientService.getClientsById(this.id);
    if (client) {
      this.client = client;
    }
  }

  editClient = () => {
    this.clientService.updateClient(this.client);
    this.router.navigate(['/client']);
  }
}
