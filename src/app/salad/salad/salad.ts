import { Component, inject, OnInit, signal } from '@angular/core';
import { Order } from '../../services/order';
import { Toppings } from '../../services/toppings';
import { Topping } from '../../models/topping';
import { filter, map } from 'rxjs';
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
    this.toppings
      .getToppings()
      .subscribe((toppings) => {
        this.toppingList.set(toppings);
      });
  }

  protected chooseTopping(topping: Topping) {
    this.toppings.chooseTopping(topping);
  }

    protected removeTopping(topping: Topping) {
    this.toppings.removeTopping(topping.id);
  }
}
