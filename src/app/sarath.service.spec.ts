import { TestBed } from '@angular/core/testing';

import { SarathService } from './sarath.service';

describe('SarathService', () => {
  let service: SarathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SarathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
