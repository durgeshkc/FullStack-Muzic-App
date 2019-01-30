import { TestBed } from '@angular/core/testing';

import { MizixHttpService } from './mizix-http.service';

describe('MizixHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MizixHttpService = TestBed.get(MizixHttpService);
    expect(service).toBeTruthy();
  });
});
