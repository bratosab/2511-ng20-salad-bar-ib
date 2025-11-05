import { Component, inject, OnInit, signal } from '@angular/core';
import { Order } from '../../services/order';
import { Toppings } from '../../services/toppings';
import { Topping } from '../../models/topping';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-salad',
  standalone: false,
  templateUrl: './salad.html',
  styleUrl: './salad.scss',
})
export class Salad implements OnInit {
  protected order = inject(Order);
  protected toppings = inject(Toppings);

  protected toppingListOld: Topping[] = [];
  protected toppingList = signal<Topping[]>([]);

  ngOnInit(): void {
    this.toppings
      .getToppings()
      .subscribe((toppings) => {
        this.toppingList.set(toppings);
        this.toppingListOld = toppings;
      });
  }

  protected chooseTopping(topping: Topping) {
    this.toppings.chooseTopping(topping);
  }

    protected removeTopping(topping: Topping) {
    this.toppings.removeTopping(topping.id);
  }
}
