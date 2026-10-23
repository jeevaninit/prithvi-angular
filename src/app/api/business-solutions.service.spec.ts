import { TestBed } from '@angular/core/testing';

import { BusinessSolutionsService } from './business-solutions.service';

describe('BusinessSolutionsService', () => {
  let service: BusinessSolutionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessSolutionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
