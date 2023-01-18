import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList
} from '@angular/fire/compat/database';
import {
  map,
  Observable
} from 'rxjs';
import { Show } from 'src/app/types/show';
import { BrokerService } from './broker.service';

@Injectable({
  providedIn: 'root'
})
export class ShowBrokerService extends BrokerService {

  private readonly _path: string;
  private _ref: AngularFireList<any>;

  constructor(_db: AngularFireDatabase) {
    super(_db);
    this._path = 'shows';
    this._ref = this.getListRef(this._path);
  }

  protected add(show: any): void {
    this._ref.push(show);
  }

  protected getAll(): Observable<any> {
    return this._ref.snapshotChanges().pipe(map(changes => changes.map(c =>({ key: c.payload.key, ...c.payload.val() }))));
  }

  protected update(key: string, show: Show): Promise<void> {
    return this._ref.update(key, show);
  }

  protected delete(key: string): Promise<void> {
    return this._ref.remove(key);
  }

  protected deleteAll(): Promise<void> {
    return this._ref.remove();
  }
}
