import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Order } from '../../services/order';

export const saladGuard: CanActivateFn = (route, state) => {
  const order = inject(Order);
  const router = inject(Router);

  if (order.name() && order.tel()) {
    return true;
  } else {
    router.navigate(['/'])
    return false;
  }
};
