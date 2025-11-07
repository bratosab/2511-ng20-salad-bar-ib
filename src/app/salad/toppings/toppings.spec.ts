import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toppings } from './toppings';

describe('Toppings', () => {
  let component: Toppings;
  let fixture: ComponentFixture<Toppings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Toppings]
})
    .compileComponents();

    fixture = TestBed.createComponent(Toppings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
