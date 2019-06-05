import { TestBed } from '@angular/core/testing';

import { WheatHarvestService } from './wheat-harvest.service';

describe('WheatHarvestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WheatHarvestService = TestBed.get(WheatHarvestService);
    expect(service).toBeTruthy();
  });
});
