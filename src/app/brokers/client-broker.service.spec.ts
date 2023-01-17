import { TestBed } from '@angular/core/testing';

import { ClientBrokerService } from './client-broker.service';

describe('ClientBrokerService', () => {
  let service: ClientBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
