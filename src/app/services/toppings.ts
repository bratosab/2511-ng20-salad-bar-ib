import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal, effect } from '@angular/core';
import { Topping } from '../models/topping';

@Injectable({
  providedIn: 'root',
})
export class Toppings {
  private http = inject(HttpClient);

  private readonly baseUrl = 'https://retoolapi.dev/XDaOzA';

  getToppings() {
    return this.http.get<Topping[]>(`${this.baseUrl}/toppings`);
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
