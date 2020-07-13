import { TestBed } from '@angular/core/testing';

import { LawsiteService } from './lawsite.service';

describe('LawsiteService', () => {
  let service: LawsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
