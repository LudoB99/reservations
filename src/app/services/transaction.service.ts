import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionBrokerService } from './brokers/transaction-broker.service';
import { ClientService } from './client.service';
import { ShowService } from './show.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private _transactions: any[] = [];

  constructor(private _broker: TransactionBrokerService,
    private _clientService: ClientService, private _showService: ShowService) {
    console.log("Creating TransactionService instance");
    this._broker.getAll().subscribe(transactions => {
      this._transactions = transactions;
    })
  }

  public addTransaction(transaction: any) {
    return this._broker.add(transaction);
  }

  public getTransactions(): any[] {
    return this._transactions;
  }

  public getTransaction(key: string): any {
    return this.getTransactions().find(transaction => {
      return transaction.key == key;
    })
  }

  public getObservable(): Observable<any> {
    return this._broker.getAll();
  }

  public getConfirmedTransactions(): any {
    let transactions = this.getTransactions().filter(confirmation => {
      return confirmation.confirmed == true;
    });
    transactions.forEach((transaction: any) => {
      transaction.client = this._clientService.getClient(transaction.client);
      transaction.show = this._showService.getShow(transaction.show);
    });
    return transactions;
  }

  public deleteTransaction(key: string) {
    return this._broker.delete(key);
  }

  public deleteAll() {
    return this._broker.deleteAll();
  }

  public confirmTransaction(key: string) {
    let transaction = this.getTransaction(key);
    transaction.confirmed = true;
    return this._broker.update(key, transaction);
  }
}
