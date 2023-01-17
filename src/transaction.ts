export interface Transaction {
  clientKey: string,
  showKey: string;
  regularTickets: number;
  studentTickets: number;
  confirmed: boolean;
  subtotal: {regularPrice: number, studentPrice: number},
  total: number
}
