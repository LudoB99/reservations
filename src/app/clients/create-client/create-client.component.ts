import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/types/client';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent{

  constructor(private _clientService: ClientService, private _location: Location) { }

  public submitClick(form: NgForm) {
    const client: Client = this._clientService.format(form.value);
    this._clientService.addClient(client);
    this._location.back();
  }
}
