import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Order {
  public name = signal<string>('');
  public tel = signal<string>('');
}
