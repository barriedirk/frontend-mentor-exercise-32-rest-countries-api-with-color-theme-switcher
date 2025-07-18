import { Routes } from '@angular/router';

import { PageNotFound } from '@pages/page-not-found/page-not-found';
import { Main } from './pages/main/main';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'search', component: Main },
  {
    path: 'detail/:cca3',
    loadComponent: () => import('./pages/detail/detail').then((m) => m.Detail),
  },
  { path: '**', component: PageNotFound },
];
