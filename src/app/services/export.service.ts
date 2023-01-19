import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { Client } from '../types/client';
import { Transaction } from '../types/transaction';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  public exportTransactions(transactions: Transaction[]) {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Reservations');
    let reservations = this.format(transactions);

    worksheet.columns = this.getReservationsColumns();

    reservations.forEach((element) => {
      worksheet.addRow(element);
    });

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'text/csv' });
      fs.saveAs(blob, 'Reservations.csv');
    })
  }

  private format(transactions: Transaction[]): Array<object> {
    let arr: Array<object> = [];
    transactions.forEach((transaction: Transaction) => {
      arr.push(
        {
          title: transaction.show?.title,
          date: transaction.show?.date,
          firstName: transaction.client?.firstName,
          lastName: transaction.client?.lastName,
          address: transaction.client?.address,
          phone: transaction.client?.phone,
          regularTickets: transaction.regularTickets,
          regularPrice: transaction.regularPrice,
          studentTickets: transaction.studentTickets,
          studentPrice: transaction.studentPrice,
          total: transaction.regularTickets * transaction.regularPrice + transaction.studentTickets * transaction.studentPrice
        }
      );
    });
    return arr;
  }

  private getReservationsColumns(): Array<object> {
    return [
      { header: 'Titre', key: 'title', width: 15 },
      { header: 'Date', key: 'date', width: 15 },
      { header: 'Prénom', key: 'firstName', width: 15 },
      { header: 'Nom de famille', key: 'lastName', width: 15 },
      { header: 'Adresse', key: 'address', width: 50 },
      { header: 'Numéro de téléphone', key: 'phone', width: 20 },
      { header: 'Billets réguliers', key: 'regularTickets', width: 15 },
      { header: 'Prix régulier', key: 'regularPrice', width: 15 },
      { header: 'Billets étudiants', key: 'studentTickets', width: 15 },
      { header: 'Prix étudiant', key: 'studentPrice', width: 15 },
      { header: 'Total', key: 'total', width: 15 },
    ];
  }

  public exportClient(clients: Client[]) {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Clients');

    worksheet.columns = this.getClientsColumns();

    clients.forEach((element) => {
      worksheet.addRow(element);
    });

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'text/csv' });
      fs.saveAs(blob, 'Clients.csv');
    })
  }

  private getClientsColumns(): Array<object> {
    return [
      { header: 'Prénom', key: 'firstName', width: 15 },
      { header: 'Nom de famille', key: 'lastName', width: 15 },
      { header: 'Adresse', key: 'address', width: 50 },
      { header: 'Ville', key: 'city', width: 15 },
      { header: 'Numéro de téléphone', key: 'phone', width: 20 },
    ];
  }
}
