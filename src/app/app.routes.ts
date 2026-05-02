import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadComponent: () => import('./ui/pages/auth/auth')
      },
      {
        path: '**',
        redirectTo: 'auth'
      }
    ]
  }
];
