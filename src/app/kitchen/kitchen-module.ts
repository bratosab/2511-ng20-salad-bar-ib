import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenRoutingModule } from './kitchen-routing-module';
import { Kitchen } from './kitchen/kitchen';


@NgModule({
  declarations: [
    Kitchen
  ],
  imports: [
    CommonModule,
    KitchenRoutingModule
  ]
})
export class KitchenModule { }
