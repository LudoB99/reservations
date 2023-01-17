import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service'
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-list-shows',
  templateUrl: './list-shows.component.html',
  styleUrls: ['./list-shows.component.css']
})
export class ListShowsComponent implements OnInit {

  constructor(public broker: ShowService, public tBroker: TransactionService) {}

  ngOnInit(): void {}
}
