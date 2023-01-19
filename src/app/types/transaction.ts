import { Client } from './client';
import { Show } from './show';

export interface Transaction {
  key?: string; 
  clientKey: string,
  showKey: string;
  regularTickets: number;
  studentTickets: number;
  regularPrice: number; 
  studentPrice: number;
  confirmed: boolean;
  client?: Client;
  show?: Show; 
}
