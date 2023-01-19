import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  selector: 'app-sell-show',
  templateUrl: './sell-show.component.html',
  styleUrls: ['./sell-show.component.css']
})
export class SellShowComponent {

  private readonly _key: string;

  constructor(private _showBroker: ShowService, private _clientBroker: ClientService,
    private _transactionBroker: TransactionService, private _route: ActivatedRoute,
    private _router: Router) {
    this._key = this._route.snapshot.paramMap.get('id') as string;
  }

  public get show(): Show | undefined {
    return this._showBroker.getShow(this._key);
  }

  public get clients(): Client[] | undefined {
    return this._clientBroker.getClients(); 
  }

  public submit(form: NgForm) {
    const data = form.value;
    this._transactionBroker.addTransaction(this.format(data)).then((res) => {
      this.goToConfirmation('/spectacles/confirmation/' + res.key);
    });
  }

  private format(data: any): Transaction {
  console.log(data); 
   return {
      clientKey: data.client.key,
      showKey: this._key,
      regularTickets: data.regularTickets,
      studentTickets: data.studentTickets,
      regularPrice: this.show?.price.regularPrice,
      studentPrice: this.show?.price.studentPrice,
    } as Transaction
  }

  private goToConfirmation(path: string) {
    this._router.navigateByUrl(path);
  }
}
