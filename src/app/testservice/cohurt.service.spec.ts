import { TestBed, inject } from '@angular/core/testing';

import { CohurtService } from './cohurt.service';

describe('CohurtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CohurtService]
    });
  });

  it('should be created', inject([CohurtService], (service: CohurtService) => {
    expect(service).toBeTruthy();
  }));
});
