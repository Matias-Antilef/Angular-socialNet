import { Routes } from '@angular/router';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    component: SettingsLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'security',
        pathMatch: 'full',
      },
      {
        path: 'security',
        loadComponent: () =>
          import('./security/security.component').then(
            (m) => m.SecurityComponent
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications.component').then(
            (m) => m.NotificationsComponent
          ),
      },
    ],
  },
];
