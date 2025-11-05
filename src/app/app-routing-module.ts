import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Order } from './order/order';

const routes: Routes = [
  {
    path: '',
    component: Order
  },
  {
    path: 'kitchen',
    loadChildren: () =>
      import('./kitchen/kitchen-module').then((kitchenModule) => {
        return kitchenModule.KitchenModule;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
