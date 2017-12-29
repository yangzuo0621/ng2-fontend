import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FaqComponent } from './faq/faq.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductCategoryListComponent } from './products/product-category-list/product-category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainContentComponent,
    HowItWorkComponent,
    FaqComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    ProductCategoryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
