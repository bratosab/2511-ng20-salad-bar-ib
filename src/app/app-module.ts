import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SaladModule } from './salad/salad-module';
import { Order } from './order/order';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { SharedMaterialModule } from './shared-material-module';

@NgModule({
  declarations: [
    App,
    Order
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SaladModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
