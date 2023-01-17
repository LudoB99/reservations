import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/client';
import { ClientBrokerService } from '../brokers/client-broker.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _clients: any[] = [];

  constructor(private _broker: ClientBrokerService) {
    console.log("Creating ClientService instance");
    this._broker.getAll().subscribe(clients => {
      this._clients = clients;
    })
  }

  public addClient(client: Client): void {
    this._broker.add(client);
  }

  public getClients(): any[] {
    return this._clients;
  }

  public getClient(key: string): any {
    let client = this.getClients().find(client => {
      return client.key == key;
    })
    return client;
  }

  public getObservable(): Observable<any> {
    return this._broker.getAll();
  }

  public updateClient(key: string, client: any): Promise<void> {
    return this._broker.update(key, client);
  }

  public deleteClient(client: any) {
    if(confirm(this.deleteClientPrompt(client))) {
      return this._broker.delete(client.key);
    }
    return undefined;
  }

  public deleteAll() {
    return this._broker.deleteAll();
  }

  private deleteClientPrompt(client: any): string {
    return "Voulez-vous supprimer " + client.firstName + " " + client.lastName + " de la liste?";
  }

  public format(client: any): Client {
    return {
      firstName: client.firstName,
      lastName: client.lastName,
      street: client.street,
      city: client.city,
      province: client.province,
      zip: client.zip,
      address: client.street + ", " + client.city + " (" + client.province + ") " + client.zip,
      phone: client.phone,
    }
  }
}
