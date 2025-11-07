import { Routes } from "@angular/router";
import { Salad } from "./salad/salad";
import { saladGuard } from "./guards/salad-guard";

export const saladRoutes: Routes = [
  {
    path: 'salad',
    component: Salad,
    canActivate: [saladGuard]
  }
];