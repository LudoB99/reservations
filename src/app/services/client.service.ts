import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from 'src/app/types/client';
import { ClientBrokerService } from './brokers/client-broker.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ClientBrokerService {

  private _clients: Array<Client> = [];

  constructor(_db: AngularFireDatabase) {
    super(_db);
    this.getAll().subscribe(clients => {
      this._clients = clients;
    })
  }

  public addClient(client: Client): void {
    this.add(client);
  }

  public getClients(): Array<Client> {
    return this._clients;
  }

  public getClient(key: string): Client | undefined {      
    let client = this.getClients().find(client => {
      return client.key == key;
    })
    return client;
  }

  public getObservable(): Observable<any> {
    return this.getAll();
  }

  public updateClient(key: string, client: any): Promise<void> {
    return this.update(key, client);
  }

  public deleteClient(client: any) {
    if(confirm(this.deleteClientPrompt(client))) {
      return this.delete(client.key);
    }
    return undefined; 
  }

  public deleteAllClients() {
    return this.deleteAll();
  }

  private deleteClientPrompt(client: any): string {
    return "Voulez-vous supprimer " + client.firstName + " " + client.lastName + " de la liste?";
  }

  public format(client: Client): Client {
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
