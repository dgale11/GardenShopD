import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DemoMaterialComponent } from './material/demo-material/demo-material.component';
// import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
const routes: Routes = [
//   { path: "demo-material", component: DemoMaterialComponent },
//   { path: "home", component: HomeComponent },
//   { path: "", redirectTo:"home", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
