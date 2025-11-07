import { Component, inject, OnInit, signal } from '@angular/core';
import { Order } from '../../services/order';
import { Toppings } from '../../services/toppings';
import { Topping } from '../../models/topping';
import { debounceTime, distinctUntilChanged, filter, map, Subject, switchMap } from 'rxjs';
import { Toppings as Toppings_1 } from '../toppings/toppings';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.html',
  styleUrl: './salad.scss',
  imports: [Toppings_1, CurrencyPipe],
})
export class Salad implements OnInit {
  protected order = inject(Order);
  protected toppings = inject(Toppings);

  protected toppingList = signal<Topping[]>([]);

  ngOnInit(): void {
    this.toppings.getToppings().subscribe((toppings) => {
      this.toppingList.set(toppings);

      // Initial load: trigger empty search to get all toppings
      this.searchTerm$.next('');
    });

    this.searchTerm$
      .pipe(
        debounceTime(300), // Wait 300ms after user stops typing
        distinctUntilChanged(), // Only continue if the value changed

        /**
         * Use switchMap to cancel previous HTTP call if a new search term arrives
         * This means only the latest search term is processed
         * Great for "type-ahead" functionality
         */
        switchMap((query) => this.toppings.searchToppings(query))
      )
      .subscribe((results) => {
        // Update the displayed list with the search result
        this.toppingList.set(results);
      });
  }

  protected chooseTopping(topping: Topping) {
    this.toppings.chooseTopping(topping);
  }

  protected removeTopping(topping: Topping) {
    this.toppings.removeTopping(topping.id);
  }

  // Subject to emit user search input over time
  searchTerm$ = new Subject<string>();

  // Called from the input field to push new search term
  onSearch(term: string) {
    this.searchTerm$.next(term);
  }
}
