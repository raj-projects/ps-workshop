import { TestBed } from '@angular/core/testing';

import { EduLibService } from './edu-lib.service';

describe('EduLibService', () => {
  let service: EduLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
