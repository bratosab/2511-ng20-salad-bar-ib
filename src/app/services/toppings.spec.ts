import { TestBed } from '@angular/core/testing';

import { Toppings } from './toppings';

describe('Toppings', () => {
  let service: Toppings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Toppings);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
