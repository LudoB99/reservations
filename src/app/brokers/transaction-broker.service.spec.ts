import { TestBed } from '@angular/core/testing';

import { TransactionBrokerService } from './transaction-broker.service';

describe('TransactionBrokerService', () => {
  let service: TransactionBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
