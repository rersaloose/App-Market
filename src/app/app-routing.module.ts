import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/Components/cart/cart.component';
import { AllProductComponent } from './Market-User/Components/all-product/all-product.component';
import { ProductDetailsComponent } from './Market-User/Components/product-details/product-details.component';

const routes: Routes = [
  {path:"product",component:AllProductComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"**",redirectTo:"product",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
