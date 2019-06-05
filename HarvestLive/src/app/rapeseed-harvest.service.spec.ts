import { TestBed } from '@angular/core/testing';

import { RapeseedHarvestService } from './rapeseed-harvest.service';

describe('RapeseedHarvestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RapeseedHarvestService = TestBed.get(RapeseedHarvestService);
    expect(service).toBeTruthy();
  });
});
