import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Salad } from './salad/salad';
import { saladGuard } from './guards/salad-guard';

const routes: Routes = [
  {
    path: 'salad',
    component: Salad,
    canActivate: [saladGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaladRoutingModule { }
