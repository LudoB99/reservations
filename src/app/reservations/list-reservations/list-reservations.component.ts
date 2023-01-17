import { Component } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { ExportService } from 'src/app/services/export.service';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css']
})
export class ListReservationsComponent {

  public transactions: any[];

  constructor(private _transactionService: TransactionService, private _export: ExportService) {
    this.transactions = this._transactionService.getConfirmedTransactions();
  }

  public export() {
    this._export.exportTransactions(this.transactions);
  }
}
