import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent {

  @Input() show: any;
  public faUpdate: IconDefinition;
  public faDelete: IconDefinition;

  constructor(public showService: ShowService, private _router: Router) {
    this.faUpdate = faPen;
    this.faDelete = faTrashCan;
  }

  ngOnInit(): void {}

  public update(show: any) {
    this._router.navigateByUrl("/spectacles/modifier/" + show.key);
  }
}
