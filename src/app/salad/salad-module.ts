import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing-module';
import { Salad } from './salad/salad';
import { Toppings } from './toppings/toppings';
import { SharedMaterialModule } from '../shared-material-module';

@NgModule({
  declarations: [Salad, Toppings],
  imports: [CommonModule, SaladRoutingModule, SharedMaterialModule],
})
export class SaladModule {}
