import { TestBed, inject } from '@angular/core/testing';

import { ApiBusService } from './apiRatp.service';

describe('ApiBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBusService]
    });
  });

  it('should be created', inject([ApiBusService], (service: ApiBusService) => {
    expect(service).toBeTruthy();
  }));
});
