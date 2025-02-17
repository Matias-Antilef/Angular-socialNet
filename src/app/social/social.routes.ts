import { Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { SocialLayoutComponent } from './social-layout/social-layout.component';

export const SOCIAL_ROUTES: Routes = [
  {
    path: '',
    component: SocialLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full',
      },
      {
        path: 'feed',
        component: FeedComponent,
      },
      {
        path: 'profile/:id',
        loadComponent: () =>
          import('./profile/profile.component').then((m) => m.ProfileComponent),
      },
    ],
  },
];
