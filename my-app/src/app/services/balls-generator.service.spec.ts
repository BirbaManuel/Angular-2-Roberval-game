import { TestBed } from '@angular/core/testing';

import { BallsGeneratorService } from './balls-generator.service';

describe('BallsGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BallsGeneratorService = TestBed.get(BallsGeneratorService);
    expect(service).toBeTruthy();
  });
});
