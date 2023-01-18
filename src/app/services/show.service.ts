import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ShowBrokerService } from 'src/app/services/brokers/show-broker.service';

@Injectable({
  providedIn: 'root'
})
export class ShowService extends ShowBrokerService{
  private _shows: any[] = [];

  constructor(_db: AngularFireDatabase) {
    super(_db)
    this.getAll().subscribe(shows => {
      this._shows = shows;
    })
  }

  public addShow(show: any) {
    return this.add(show);
  }

  public getShows(): any[] {
    return this._shows;
  }

  public getShow(key: string): any {
    let show = this.getShows().find(show => {
      return show.key === key;
    });
    return show;
  }

  public updateShow(key: string, show: any): Promise<void> {
    return this.update(key, show);
  }

  public deleteShow(show: any) {
    if(confirm(this.deleteShowPrompt(show))) {
      return this.delete(show.key);
    }
    return undefined;
  }

  public deleteAllShows() {
    return this.deleteAll();
  }

  private deleteShowPrompt(show: any): string {
    return "Voulez-vous supprimer " + show.title + " de la liste?";
  }

  public format(show: any): object {
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
