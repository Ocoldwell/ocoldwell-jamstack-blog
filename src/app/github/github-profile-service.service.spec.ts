import { TestBed } from '@angular/core/testing';

import { GithubProfileServiceService } from './github-profile-service.service';

describe('GithubProfileServiceService', () => {
  let service: GithubProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
