import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList
} from '@angular/fire/compat/database';
import {
  map,
  Observable
} from 'rxjs';
import { Client } from 'src/app/types/client';
import { BrokerService } from './broker.service';

@Injectable({
  providedIn: 'root'
})
export class ClientBrokerService extends BrokerService {

  private readonly _path: string;
  private _ref: AngularFireList<Client>;

  constructor(_db: AngularFireDatabase) {
    super(_db);
    this._path = 'clients';
    this._ref = this.getListRef(this._path);
  }

  protected add(client: Client): void {
    this._ref.push(client);
  }

  protected getAll(): Observable<any> {
    return this._ref.snapshotChanges().pipe(map(changes => changes.map(c =>({ key: c.payload.key, ...c.payload.val() }))));
  }

  protected update(key: string, client: Client): Promise<void> {
    return this._ref.update(key, client);
  }

  protected delete(key: string): Promise<void> {
    return this._ref.remove(key);
  }

  protected deleteAll(): Promise<void> {
    return this._ref.remove();
  }
}
