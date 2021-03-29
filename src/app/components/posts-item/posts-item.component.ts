import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import { Posts } from '../../interface/post.interface';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss'],
})
export class PostsItemComponent implements OnInit {
  //for storing posts
  posts: Array<Posts> = [];

  //keeping a count at the post index- to use for displaying
  postsIndex = 0;

  postsAvailable: boolean; // true is available

  loading: boolean; // value is true if posts are loading

  postType: string;

  postsList: [];

  constructor(
    private postsService: PostsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      this.loading = true;
      this.postType = params.get('type');
      this.postsService.fetchPosts(this.postType).subscribe(() => {
        this.posts = [];
        this.postsIndex = 0;
        this.loader();
      });
    });
  }

  // For loading 10 posts at a time
  loader() {
    const postsList = [];
    this.postsAvailable = this.postsIndex + 10 < this.postsService.posts.length;
    if (this.postsAvailable) {
      for (let i = this.postsIndex; i < this.postsIndex + 10; i++) {
        postsList.push(
          this.postsService.fetchPostID(this.postsService.posts[i])
        );
      }
      this.loading = true;
      forkJoin(postsList).subscribe(
        (morePosts: Array<Posts>) => {
          this.posts = [...this.posts, ...morePosts];
          this.loading = false;
          this.postsIndex = this.postsIndex + 10;
        },
        () => {
          this.loading = false;
        }
      );
    }
  }
}
