import { Routes } from '@angular/router';
import { Klokken } from './klokken/klokken';
import { Over } from './over/over';

export const routes: Routes = [
    { path: 'klokken', component: Klokken },
    { path: 'over', component: Over },
];
