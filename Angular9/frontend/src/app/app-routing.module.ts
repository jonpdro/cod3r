import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductComponent } from "./views/product/product.component";
import { HomeComponent } from "./views/home/home.component";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductComponent,
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
