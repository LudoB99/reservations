import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/compat/database';
import { BrokerService } from './broker.service';

@Injectable({
  providedIn: 'root'
})
export class ShowBrokerService {

  private readonly _path: string;
  private _ref: AngularFireList<any>;

  constructor(private _broker: BrokerService) {
    this._path = 'shows';
    this._ref = _broker.getListRef(this._path);
  }

  public add(show: any) {
    return this._ref.push(show);
  }

  public getAll(): Observable<any> {
    return this._ref.snapshotChanges().pipe(map(changes => changes.map(c =>({ key: c.payload.key, ...c.payload.val() }))));
  }

  public update(key: string, show: any): Promise<void>{
    return this._ref.update(key, show);
  }

  public delete(key: string): Promise<void> {
    return this._ref.remove(key);
  }

  public deleteAll(): Promise<void> {
    return this._ref.remove();
  }
}
