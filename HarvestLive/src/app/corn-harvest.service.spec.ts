import { TestBed } from '@angular/core/testing';

import { CornHarvestService } from './corn-harvest.service';

describe('CornHarvestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CornHarvestService = TestBed.get(CornHarvestService);
    expect(service).toBeTruthy();
  });
});
