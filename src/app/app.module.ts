import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//para usar bootstrap sin jquery
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdenexitosaComponent } from './ordenexitosa/ordenexitosa.component';
import { MisOrdenesComponent } from './mis-ordenes/mis-ordenes.component';
import { AdminProductosComponent } from './admin/admin-productos/admin-productos.component';
import { AdminOrdenesComponent } from './admin/admin-ordenes/admin-ordenes.component';
import { LoginComponent } from './login/login.component';
import { BsnavbarComponent } from './bsnavbar/bsnavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    CarritoComponent,
    CheckoutComponent,
    OrdenexitosaComponent,
    MisOrdenesComponent,
    AdminProductosComponent,
    AdminOrdenesComponent,
    LoginComponent,
    BsnavbarComponent
  ],
  imports: [ NgbModule,
   AppRoutingModule,
  
    BrowserModule,
   
   // MaterialdesignModule, 
 
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
