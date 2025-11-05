import { Component, input, Input, output } from '@angular/core';
import { Topping } from '../../models/topping';

@Component({
  selector: 'app-toppings',
  standalone: false,
  templateUrl: './toppings.html',
  styleUrl: './toppings.scss',
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
