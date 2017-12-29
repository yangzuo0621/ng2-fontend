import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const productsRoutes: Routes = [
    { path: '/', component: ProductsListComponent },
    { path: 'catetory/:category', component: ProductCategoryListComponent },
    { path: 'detail/:product', component: ProductDetailsComponent }
];
