import { N, R } from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order as OrderService } from '../services/order';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private order = inject(OrderService);

  protected orderForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('^0[6-7][0-9]{8}$')]],
  });

  get telControl() {
    return this.orderForm.controls.tel;
  }

  startOrder() {
    if (this.orderForm.valid) {
      this.order.name.set(this.orderForm.controls.name.value);
      this.order.tel.set(this.orderForm.value.tel ?? '');
      this.router.navigate(['salad']);
    }
  }
}
