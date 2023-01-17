import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { ClientService } from 'src/app/services/client.service';
import { ShowService } from 'src/app/services/show.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-confirm-show',
  templateUrl: './confirm-show.component.html',
  styleUrls: ['./confirm-show.component.css']
})
export class ConfirmShowComponent {

  public readonly key: any;

  constructor(public transactionService: TransactionService, public showService: ShowService,
    public clientService: ClientService, private _route: ActivatedRoute,
    private _location: Location, private _router: Router) {
      this.key = this._route.snapshot.paramMap.get('id');
  }

  public cancel() {
    this.transactionService.deleteTransaction(this.key);
    this._location.historyGo(-2);
  }

  public confirm() {
    this.transactionService.confirmTransaction(this.key);
    this.redirect('/reservations/liste')
  }

  private redirect(path: string) {
    this._router.navigateByUrl(path);
  }
}
