import { TestBed } from '@angular/core/testing';

import { Toppings } from './toppings';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Topping } from '../models/topping';

describe('Toppings', () => {
  let toppingsService: Toppings;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    toppingsService = TestBed.inject(Toppings);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(toppingsService).toBeTruthy();
  });

  it('getToppings() should return a list of toppings', (done) => {
    const fakeToppings: Topping[] = [{ id: 1, name: 'Carrots', price: 1000 }]

    toppingsService.getToppings().subscribe(data => {
      expect(data).toEqual(fakeToppings)
      done()
    })

    const req = httpTesting.expectOne('https://retoolapi.dev/XDaOzA/toppings')
    expect(req.request.method).toBe('GET')
    req.flush(fakeToppings)

    httpTesting.verify()
  })
});
