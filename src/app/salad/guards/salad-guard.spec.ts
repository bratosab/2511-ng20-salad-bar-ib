import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { saladGuard } from './salad-guard';

describe('saladGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => saladGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
