import { N, R } from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Order as OrderService } from '../services/order';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { SetName, SetTel } from '../store/app.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.html',
  styleUrl: './order.scss',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError, MatButton],
})
export class Order {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private order = inject(OrderService);
  private store = inject(Store);

  protected orderForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('^0[6-7][0-9]{8}$')]],
  });

  get telControl() {
    return this.orderForm.controls.tel;
  }

  startOrder() {
    if (this.orderForm.valid) {
      // this.order.name.set(this.orderForm.controls.name.value);
      // this.order.tel.set(this.orderForm.value.tel ?? '');

      this.store.dispatch(SetName({ name: this.orderForm.controls.name.value }));  
      this.store.dispatch(SetTel({ tel: this.orderForm.controls.tel.value }));

      this.router.navigate(['salad']);
    }
  }
}
