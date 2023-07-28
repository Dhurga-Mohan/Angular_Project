import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompleteOrderComponent } from './complete-order/complete-order.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent },
  {path:'cart', component:CartComponent },
  {path:'checkout', component:CheckoutComponent },
  {path:'complete-order',component:CompleteOrderComponent },
  {path:'log-in', component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
