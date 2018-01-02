import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ProductCategoryListComponent,
    ProductsComponent
  ]
})
export class ProductsModule { }
