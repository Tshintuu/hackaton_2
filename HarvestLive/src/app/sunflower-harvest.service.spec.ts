import { TestBed } from '@angular/core/testing';

import { SunflowerHarvestService } from './sunflower-harvest.service';

describe('SunflowerHarvestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SunflowerHarvestService = TestBed.get(SunflowerHarvestService);
    expect(service).toBeTruthy();
  });
});
