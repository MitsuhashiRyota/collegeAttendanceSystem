import { TestBed, inject } from '@angular/core/testing';

import { MonthSelectService } from './month-select.service';

describe('MonthSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthSelectService]
    });
  });

  it('should be created', inject([MonthSelectService], (service: MonthSelectService) => {
    expect(service).toBeTruthy();
  }));
});
