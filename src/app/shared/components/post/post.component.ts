import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {}
