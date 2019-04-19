import { TestBed } from '@angular/core/testing';

import { AnnaLuckyMomentsService } from './anna-lucky-moments.service';

describe('AnnaLuckyMomentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnaLuckyMomentsService = TestBed.get(AnnaLuckyMomentsService);
    expect(service).toBeTruthy();
  });
});
