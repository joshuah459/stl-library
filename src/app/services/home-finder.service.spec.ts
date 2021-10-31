import { TestBed } from '@angular/core/testing';

import { HomeFinderService } from './home-finder.service';

describe('HomeFinderService', () => {
  let service: HomeFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
