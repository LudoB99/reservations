import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(private _db: AngularFireDatabase) { }

  public getListRef(path: string): AngularFireList<any> {
    return this._db.list(path);
  }

  public getObjectRef(path: string): AngularFireObject<any> {
    return this._db.object(path);
  }
}
