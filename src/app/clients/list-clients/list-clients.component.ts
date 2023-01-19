import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faPen,
  faTrashCan,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { ClientService } from 'src/app/services/client.service';
import { ExportService } from 'src/app/services/export.service';
import { Client } from 'src/app/types/client';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent {

  //#region Private members

  private _updateIcon: IconDefinition;
  private _deleteIcon: IconDefinition;

  //#endregion

  //#region ctor

  constructor(private _clientService: ClientService, 
    private _exportService: ExportService, private _router: Router) {

    this._updateIcon = faPen;
    this._deleteIcon = faTrashCan;
  }

  //#endregion

  //#region Properties

  public get updateIcon(): IconDefinition {
    return this._updateIcon;
  }

  public get deleteIcon(): IconDefinition{
    return this._deleteIcon;
  }

  public get hasClients(): boolean {
    const liste = this._clientService.getClients();
    return !(liste === undefined || liste.length === 0);
  }

  public get clients(): Array<Client> {
    return this._clientService.getClients();
  }

  //#endregion

  //#region Public methods

  public onExportClientClick(): void {
    this._exportService.exportClient(this.clients);
  }

  public onUpdateClientClick(client: Client): void {
    if(client.key !== undefined) {
      this._router.navigateByUrl("/clients/modifier/" + client.key);
    }
  }

  public onDeleteClientClick(client: Client): void {
    this._clientService.deleteClient(client);
  }

  //#endregion
}
