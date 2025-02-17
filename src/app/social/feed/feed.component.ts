import { Component } from '@angular/core';
import { PostComponent } from '../../shared/components/post/post.component';
@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {}
