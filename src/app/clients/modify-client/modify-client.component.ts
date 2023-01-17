import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-modify-client',
  templateUrl: './modify-client.component.html',
  styleUrls: ['./modify-client.component.css']
})
export class ModifyClientComponent {

  public key: any;

  constructor(public clientService: ClientService, private _route: ActivatedRoute, private _location: Location) {
    this.key = _route.snapshot.paramMap.get('id');
  }

  public update(form: NgForm) {
    this.clientService.updateClient(this.key, this.clientService.format(form))
    .then(() => {
      this._location.back();
    });
  }
}
