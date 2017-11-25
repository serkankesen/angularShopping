import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartService } from './cart/cart.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    {provide:"apiUrl",useValue:"http://northwindapi.azurewebsites.net/api/"},
    NotificationsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
