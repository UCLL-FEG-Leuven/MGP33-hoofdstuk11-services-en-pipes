import { TestBed } from '@angular/core/testing';

import { KlokService } from './klok.service';

describe('KlokService', () => {
  let service: KlokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
