import { Location } from '@angular/common';
import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/types/client';
@Component({
  selector: 'app-modify-client',
  templateUrl: './modify-client.component.html',
  styleUrls: ['./modify-client.component.css']
})
export class ModifyClientComponent {

  //#region Private members

  private readonly _key: string;

  //#endregion

  //#region ctor

  constructor(private _clientService: ClientService, private _route: ActivatedRoute, private _location: Location) {
    this._key = this.getKey(); 
  }

  //#endregion

  //#region Properties

  public get client(): Client | undefined {
    return this._clientService.getClient(this._key); 
  }

  //#endregion

  //#region Public methods

  public update(form: NgForm): void {
    if(this.isValid(form)) {
      this._clientService.updateClient(this._key, form.value).then(() => {
        this._location.back();
      });
    }
  }

  //#endregion

  //#region Private methods

  private isValid(form: NgForm): boolean {
    return true; //TODO: Validation de formulaire.
  }

  private getKey(): string {
    const paramName = 'id'; 
    const key = this._route.snapshot.paramMap.get(paramName);
    if(key  === null) {
      throw new Error('Wrong URL format');
    }
    return key; 
  }

  //#endregion
}
