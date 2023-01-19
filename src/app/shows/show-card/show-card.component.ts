import {
  Component,
  Input
} from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import {
  faPen,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { ShowService } from 'src/app/services/show.service';
import { Show } from 'src/app/types/show';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent {

  @Input() inputShow: Show | undefined;

  //#region Private members

  private _updateIcon: IconDefinition;
  private _deleteIcon: IconDefinition;

  //#endregion

  //#region ctor

  constructor(private _showService: ShowService, private _router: Router) {
    this._updateIcon = faPen;
    this._deleteIcon = faTrashCan;
  }

  //#endregion

  //#region Properties

  public get updateIcon(): IconDefinition {
    return this._updateIcon; 
  }

  public get deleteIcon(): IconDefinition {
    return this._deleteIcon; 
  }

  public get show(): Show {
    return this.inputShow as Show;  
  }

  //#endregion

  //#region Public methods

  public onUpdateShowClick(): void {
    this._router.navigateByUrl("/spectacles/modifier/" + this.show.key);
  }

  public onDeleteShowClick(): void {
    this._showService.deleteShow(this.show); 
  }

  //#endregion
}
