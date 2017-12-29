import { Routes } from '@angular/router';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FaqComponent } from './faq/faq.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductCategoryListComponent } from './products/product-category-list/product-category-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const appRoutes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'how-it-works', component: HowItWorkComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'products', component: ProductsListComponent },
    { path: 'products/category', component: ProductCategoryListComponent },
    { path: 'products/details', component: ProductDetailsComponent }
    // { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' }
];
