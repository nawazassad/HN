import { Component, Input } from '@angular/core';
import { Posts } from '../../interface/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  @Input() posts: Posts;

  constructor() {}

  openURL(url: string) {
    if (url) {
      window.open(url);
    }
  }
}
