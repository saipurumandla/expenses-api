import { TestBed } from '@angular/core/testing';

import { GetauthService } from './getauth.service';

describe('GetauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetauthService = TestBed.get(GetauthService);
    expect(service).toBeTruthy();
  });
});
