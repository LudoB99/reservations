import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShowService } from 'src/app/services/show.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-show',
  templateUrl: './create-show.component.html',
  styleUrls: ['./create-show.component.css']
})
export class CreateShowComponent {

  constructor(private _showService: ShowService, private _location: Location) {}

  public submit(form:NgForm) {
    let show = this._showService.formatNewShow(form.value);
    this._showService.addShow(show).then(
      () => {this._location.back()}
    );
  }
}
