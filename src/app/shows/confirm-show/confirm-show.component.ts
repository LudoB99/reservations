import { Location } from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ShowService } from 'src/app/services/show.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { Client } from 'src/app/types/client';
import { Show } from 'src/app/types/show';
import { Transaction } from 'src/app/types/transaction';

@Component({
  selector: 'app-confirm-show',
  templateUrl: './confirm-show.component.html',
  styleUrls: ['./confirm-show.component.css']
})
export class ConfirmShowComponent {

  public readonly key: string;

  constructor(private _transactionService: TransactionService, private _showService: ShowService,
    private _clientService: ClientService, private _route: ActivatedRoute,
    private _location: Location, private _router: Router) {
      this.key = this._route.snapshot.paramMap.get('id') as string;
  }

  public get transaction(): Transaction | undefined {
    return this._transactionService.getTransaction(this.key); 
  }

  public get client(): Client | undefined {
    const clientKey = this.transaction?.clientKey as string; 
    return this._clientService.getClient(clientKey); 
  }

  public get show(): Show | undefined {
    const showKey = this.transaction?.showKey as string; 
    return this._showService.getShow(showKey);
  }

  public get total(): number {
    const t: Transaction = this.transaction as Transaction; 
    return t.regularPrice * t.regularTickets + t.studentPrice * t.studentTickets; 
  }

  public onCancelClick() {
    this._transactionService.deleteTransaction(this.key);
    this._location.historyGo(-2);
  }

  public onConfirmClick() {
    this._transactionService.confirmTransaction(this.key);
    this.redirect('/reservations/liste')
  }

  private redirect(path: string) {
    this._router.navigateByUrl(path);
  }
}
