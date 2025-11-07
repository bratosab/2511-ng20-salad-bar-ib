import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Order } from './order';
import { provideStore } from '@ngrx/store';
import { appReducer } from '../store/app.reducer';

describe('Order', () => {
  let component: Order;
  let fixture: ComponentFixture<Order>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Order],
    providers: [provideStore({
          app: appReducer
        }),],
})
    .compileComponents();

    fixture = TestBed.createComponent(Order);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with two input fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form[data-test="order-form"]')).toBeTruthy();
    expect(compiled.querySelectorAll('mat-form-field input[matInput]')).toHaveSize(2);
  });
});
