import { Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { AccountComponent } from './account/account.component';

export const CORE_ROUTES: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'feed',
    component: FeedComponent,
  },
];
