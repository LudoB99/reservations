import { Component } from '@angular/core';
import { ClientService } from './services/client.service';
import { ShowService } from './services/show.service';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = "Réservations";

  constructor(private _transactionService: TransactionService, private _showService: ShowService, private _clientService: ClientService) {

  }
}
