import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  Observable,
  of
} from 'rxjs';
import { Show } from '../types/show';
import { ShowBrokerService } from './brokers/show-broker.service';

@Injectable({
  providedIn: 'root'
})
export class ShowService extends ShowBrokerService {
  private _shows: Array<Show> = [];

  constructor(db: AngularFireDatabase) {
    super(db); 
    this.getAll().subscribe(shows => {
      this._shows = shows;
    })
  }

  public addShow(show: Show): void {
    return this.add(show);
  }

  public getShows(): Array<Show> { 
    return this._shows;
  }

  public getShow(key: string): Show | undefined {
    let show = this.getShows().find(show => {
      return show.key === key;
    });
    return show;
  }

  public updateShow(key: string, show: Show): Promise<void> {
    return this.update(key, show);
  }

  public deleteShow(show: Show): Promise<void> | undefined{
    if(confirm(this.deleteShowPrompt(show))) {
      if(show.key) return this.delete(show.key);
    }
    return undefined
  }

  public deleteAllShows() {
    return this.deleteAll();
  }

  private deleteShowPrompt(show: Show): string {
    return "Voulez-vous supprimer " + show.title + " de la liste?";
  }

  public format(show: Show): object {
    return {
      title: show.title,
      date: show.date,
      price: {regularPrice: show.price.regularPrice, studentPrice: show.price.studentPrice},
      imgUrl: show.imgUrl
    }
  }

  public formatNewShow(newShow: any) {
    return {
      title: newShow.title,
      date: newShow.date,
      price: {regularPrice: newShow.regularPrice, studentPrice: newShow.studentPrice},
      imgUrl: newShow.imgUrl
    }
  }
}
