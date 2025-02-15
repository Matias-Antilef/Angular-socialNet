import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./social/social.routes').then((m) => m.SOCIAL_ROUTES),
  },
  {
    path: 'social',
    loadChildren: () =>
      import('./social/social.routes').then((m) => m.SOCIAL_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './shared/components/page-not-found/page-not-found.component'
      ).then((m) => m.PageNotFoundComponent),
  },
];
