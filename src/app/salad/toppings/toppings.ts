import { Component, input, Input, output } from '@angular/core';
import { Topping } from '../../models/topping';
import { MatButton } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-toppings',
    templateUrl: './toppings.html',
    styleUrl: './toppings.scss',
    imports: [MatButton, CurrencyPipe],
})
export class Toppings {
  // @Input() public toppings: Topping[] = []

  public buttonLabel = input<string>('')
  public toppings = input<Topping[]>([])
  public chooseTopping = output<Topping>()

  protected handleToppingClick(clickedTopping: Topping) {
    this.chooseTopping.emit(clickedTopping)
  }
}
