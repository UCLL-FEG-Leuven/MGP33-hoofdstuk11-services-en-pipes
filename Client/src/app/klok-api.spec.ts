import { TestBed } from '@angular/core/testing';

import { KlokApi } from './klok-api';

describe('KlokService', () => {
  let service: KlokApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlokApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
