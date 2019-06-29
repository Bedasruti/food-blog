import { TestBed } from '@angular/core/testing';

import { FoodreceipesDetailsService } from './foodreceipes-details.service';

describe('FoodreceipesDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodreceipesDetailsService = TestBed.get(FoodreceipesDetailsService);
    expect(service).toBeTruthy();
  });
});
