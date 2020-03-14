import { TestBed } from '@angular/core/testing';

import { LdpLibraryService } from './ldp-library.service';

describe('LdpLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LdpLibraryService = TestBed.get(LdpLibraryService);
    expect(service).toBeTruthy();
  });
});
