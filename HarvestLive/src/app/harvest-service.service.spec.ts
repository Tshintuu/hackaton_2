import { TestBed } from '@angular/core/testing';

import { HarvestServiceService } from './harvest-service.service';

describe('HarvestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarvestServiceService = TestBed.get(HarvestServiceService);
    expect(service).toBeTruthy();
  });
});
