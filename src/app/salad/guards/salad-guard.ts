import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Order } from '../../services/order';
import { Store } from '@ngrx/store';

export const saladGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  const app = store.selectSignal(state => state.app)

  if (app().name && app().tel) {
    return true;
  } else {
    router.navigate(['/'])
    return false;
  }
};
