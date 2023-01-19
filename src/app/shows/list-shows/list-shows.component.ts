import {
  Component,
  OnInit
} from '@angular/core';
import { ShowService } from 'src/app/services/show.service';
import { Show } from 'src/app/types/show';

@Component({
  selector: 'app-list-shows',
  templateUrl: './list-shows.component.html',
  styleUrls: ['./list-shows.component.css']
})
export class ListShowsComponent {

  constructor(private _showService: ShowService) {}

  public get shows(): Array<Show> {
    return this._showService.getShows(); 
  }
}
