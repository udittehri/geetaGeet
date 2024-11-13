import { TestBed } from '@angular/core/testing';

import { CatFactServiceService } from './cat-fact-service.service';

describe('CatFactServiceService', () => {
  let service: CatFactServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFactServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
