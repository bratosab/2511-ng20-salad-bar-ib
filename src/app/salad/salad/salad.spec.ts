import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salad } from './salad';

describe('Salad', () => {
  let component: Salad;
  let fixture: ComponentFixture<Salad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Salad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Salad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
