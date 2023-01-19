import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../types/transaction';
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
    this._broker.getAll().subscribe(transactions => {
      this._transactions = transactions;
    })
  }

  public addTransaction(transaction: Transaction) {
    console.log(transaction); 
    return this._broker.add(transaction);
  }

  public getTransactions():Array<Transaction> {
    return this._transactions;
  }

  public getTransactionsByShow(showKey: string) {
    return this.getTransactions().find(transaction => {
      return transaction.showKey == showKey;
    })
  }

  public getTransaction(key: string): Transaction | undefined {
    return this.getTransactions().find(transaction => {
      return transaction.key == key;
    })
  }

  public getObservable(): Observable<Array<Transaction>> {
    return this._broker.getAll();
  }

  public getConfirmedTransactions(): Array<Transaction> {
    let transactions = this.getTransactions().filter(confirmation => {
      return confirmation.confirmed == true;
    });
    transactions.forEach((transaction: Transaction) => {
      transaction.client = this._clientService.getClient(transaction.clientKey);
      transaction.show = this._showService.getShow(transaction.showKey);
    });
    return transactions;
  }

  public deleteTransaction(key: string) {
    return this._broker.delete(key);
  }

  public deleteAll() {
    return this._broker.deleteAll();
  }

  public confirmTransaction(key: string): Promise<void> | void {
    let transaction = this.getTransaction(key);
    if(transaction === undefined) {
      return; 
    }
    transaction.confirmed = true;
    return this._broker.update(key, transaction);
  }
}
