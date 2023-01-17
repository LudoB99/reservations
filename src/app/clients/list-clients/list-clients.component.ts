import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { faPen, faTrashCan, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ExportService } from 'src/app/services/export.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent {

  public faUpdate: IconDefinition;
  public faDelete: IconDefinition;

  constructor(public broker: ClientService, private _export: ExportService,
    private _router: Router) {

    this.faUpdate = faPen;
    this.faDelete = faTrashCan;
  }

  public export(client: any) {
    this._export.exportClient(client);
  }

  public update(client: any) {
    this._router.navigateByUrl("/clients/modifier/" + client.key);
  }
}
