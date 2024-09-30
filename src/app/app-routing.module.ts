import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CartsummaryComponent } from './cartsummary/cartsummary.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'summary', component: CartsummaryComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' } // Redirect any other route to products
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
