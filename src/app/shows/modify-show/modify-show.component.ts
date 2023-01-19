import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from 'src/app/services/show.service';
import { Show } from 'src/app/types/show';

@Component({
  selector: 'app-modify-show',
  templateUrl: './modify-show.component.html',
  styleUrls: ['./modify-show.component.css']
})
export class ModifyShowComponent {

  private readonly _key: string;

  constructor(private _showService: ShowService, private _route: ActivatedRoute, private _location: Location) {
    this._key = this.getShowID();
  }

  public get show(): Show {
    const show = this._showService.getShow(this._key); 
    if(!show) {
      throw "Wrong show ID"; 
    } 
    return show; 
  }

  public onSubmitForm(form: NgForm) {
    this._showService.updateShow(this._key, form.value)
    .then(() => {
      this._location.back();
    });
  }

  private getShowID(): string {
    const id = this._route.snapshot.paramMap.get('id');
    return id as string; 
  }
}
