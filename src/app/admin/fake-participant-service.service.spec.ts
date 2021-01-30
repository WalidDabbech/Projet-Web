import { TestBed } from '@angular/core/testing';

import { FakeParticipantServiceService } from './fake-participant-service.service';

describe('FakeParticipantServiceService', () => {
  let service: FakeParticipantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeParticipantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
