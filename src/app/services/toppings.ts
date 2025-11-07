import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal, effect } from '@angular/core';
import { Topping } from '../models/topping';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Toppings {
  private http = inject(HttpClient);

  private readonly baseUrl = 'https://retoolapi.dev/XDaOzA';

  private availableToppings: Topping[] = [];
  getToppings() {
    return this.http.get<Topping[]>(`${this.baseUrl}/toppings`).pipe(
      tap((toppings) => {
        this.availableToppings = toppings;
      }
    ))
  }

  // Simulated "backend search" for toppings
searchToppings(query: string): Observable<Topping[]> {
  const lowercaseQuery = query.toLowerCase();
  
  // Filter locally available toppings that include the query
  const filtered = this.availableToppings.filter(t =>
    t.name.toLowerCase().includes(lowercaseQuery)
  );
  
  // Simulate a 1-second delay to mimic backend latency
  return of(filtered).pipe(delay(1000)); // simulate latency
}


  // --------------------------------------------
  // Signal to store the list of chosen toppings
  // signal<type>(initialValue)
  private chosenToppingsList = signal<Topping[]>([]);

  // Getter for the toppings signal
  get chosenToppings() {
    return this.chosenToppingsList.asReadonly();
  }

  public totalPrice = computed(() => {
    let total = 0;
    this.chosenToppings().forEach((topping) => (total += topping.price));
    return total;
  });

  public totalPriceReduce = computed(() =>
    this.chosenToppings().reduce((total, topping) => {
      return total + topping.price;
    }, 0)
  );

  // Add a new topping to list
  chooseTopping(topping: Topping) {
    // signal.update(currentValue => newValue)
    // this.chosenToppingsList.update((currentToppings) => [...currentToppings, topping]);
    this.chosenToppingsList.update(currentToppings => {
      currentToppings.push(topping)

      return currentToppings
    });
  }

  // Remove a topping
  removeTopping(id: number) {
    // signal.update(currentValue => newValue)
    // const filteredToppings = this.chosenToppingsList().filter(topping => topping.id !== id)
    // this.chosenToppingsList.set(filteredToppings);

    this.chosenToppingsList.update((toppings) => toppings.filter((topping) => topping.id !== id));
  }
}
