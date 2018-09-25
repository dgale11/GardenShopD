import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdenexitosaComponent } from './ordenexitosa/ordenexitosa.component';
import { MisOrdenesComponent } from './mis-ordenes/mis-ordenes.component';
import { AdminProductosComponent } from './admin/admin-productos/admin-productos.component';
import { AdminOrdenesComponent } from './admin/admin-ordenes/admin-ordenes.component';
import { LoginComponent } from './login/login.component';

//para que funcione routerLink en navbar debe coincidir mayusculas, por ej no es /carrito sino /Carrito
const routes: Routes = [
 { path: "Productos", component: ProductosComponent },
 { path: "Carrito", component: CarritoComponent },
 { path: "Checkout", component: CheckoutComponent },
 { path: "Orden-exitosa", component: OrdenexitosaComponent },
 { path: "Login", component: LoginComponent },
{ path: "MisOrdenes", component: MisOrdenesComponent },
{ path: "admin/productos", component: AdminProductosComponent },
{ path: "admin/ordenes", component: AdminOrdenesComponent },
{ path: "Home", component: HomeComponent },
{ path: "", redirectTo:"home", pathMatch:"full" }
];

@NgModule({ 
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
