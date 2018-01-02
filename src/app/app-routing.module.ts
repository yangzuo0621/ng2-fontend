import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FaqComponent } from './faq/faq.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: MainContentComponent },
    { path: 'how-it-works', component: HowItWorkComponent },
    { path: 'faq', component: FaqComponent },
    // { path: 'products', component: ProductsListComponent },
    // { path: 'products/category/:type', component: ProductCategoryListComponent },
    // { path: 'products/details', component: ProductDetailsComponent }
    { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
