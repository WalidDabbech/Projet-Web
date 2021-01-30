import { TestBed } from '@angular/core/testing';

import { FakeFormateurServiceService } from './fake-formateur-service.service';

describe('FakeFormateurServiceService', () => {
  let service: FakeFormateurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeFormateurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
