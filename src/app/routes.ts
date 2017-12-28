import { Routes } from '@angular/router';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FaqComponent } from './faq/faq.component';

export const appRoutes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'how-it-works', component: HowItWorkComponent },
    { path: 'faq', component: FaqComponent }
];
