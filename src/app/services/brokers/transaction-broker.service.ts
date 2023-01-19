import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList
} from '@angular/fire/compat/database';
import {
  map,
  Observable
} from 'rxjs';
import { Transaction } from 'src/app/types/transaction';
import { BrokerService } from './broker.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionBrokerService extends BrokerService {

  private readonly _path: string;
  private _ref: AngularFireList<any>;

  constructor(_db: AngularFireDatabase) {
    super(_db); 
    this._path = 'transactions';
    this._ref = this.getListRef(this._path);
  }

  public add(transaction: Transaction) {
    return this._ref.push(transaction);
  }

  public getAll(): Observable<any> {
    return this._ref.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  public update(key: string, transaction: Transaction): Promise<void>{
    return this._ref.update(key, transaction);
  }

  public delete(key: string): Promise<void> {
    return this._ref.remove(key);
  }

  public deleteAll(): Promise<void> {
    return this._ref.remove();
  }
}
