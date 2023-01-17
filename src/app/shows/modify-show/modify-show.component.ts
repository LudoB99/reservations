import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-modify-show',
  templateUrl: './modify-show.component.html',
  styleUrls: ['./modify-show.component.css']
})
export class ModifyShowComponent {

  public key: any;

  constructor(public showService: ShowService, private _route: ActivatedRoute, private _location: Location) {
    this.key = _route.snapshot.paramMap.get('id');
  }

  public update(form: NgForm) {

    this.showService.updateShow(this.key, this.showService.format(form))
    .then(() => {
      this._location.back();
    });
  }
}
