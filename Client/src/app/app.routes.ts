import { Routes } from '@angular/router';
import { KlokkenComponent } from './klokken/klokken.component';
import { OverComponent } from './over/over.component';

export const routes: Routes = [
    { path: 'klokken', component: KlokkenComponent },
    { path: 'over', component: OverComponent },
];
