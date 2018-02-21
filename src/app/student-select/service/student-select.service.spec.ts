import { TestBed, inject } from '@angular/core/testing';

import { StudentSelectService } from './student-select.service';

describe('StudentSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentSelectService]
    });
  });

  it('should be created', inject([StudentSelectService], (service: StudentSelectService) => {
    expect(service).toBeTruthy();
  }));
});
