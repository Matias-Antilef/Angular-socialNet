import { Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { AccountComponent } from './account/account.component';
import { SocialLayoutComponent } from './social-layout/social-layout.component';

export const SOCIAL_ROUTES: Routes = [
  {
    path: '',
    component: SocialLayoutComponent,
    children: [
      {
        path: '',
        component: FeedComponent,
      },
      {
        path: 'feed',
        component: FeedComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
      },
    ],
  },
];
