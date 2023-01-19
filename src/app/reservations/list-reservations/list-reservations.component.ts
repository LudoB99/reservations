import { Component } from '@angular/core';
import { ExportService } from 'src/app/services/export.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/types/transaction';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css']
})
export class ListReservationsComponent {


  constructor(private _transactionService: TransactionService, private _export: ExportService) {}

  public get transactions(): Transaction[] {
    return this._transactionService.getConfirmedTransactions();
  }

  public export() {
    this._export.exportTransactions(this.transactions);
  }

  public total(t: Transaction): number {
    return t.regularPrice * t.regularTickets + t.studentPrice * t.studentTickets; 
  }
}
