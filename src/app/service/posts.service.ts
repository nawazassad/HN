import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: any;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  }

  fetchPosts(postType: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}${postType}stories.json `)

      .pipe(map((response) => (this.posts = response)));
  }

  // For fetching the posts from its id
  fetchPostID(postId: number) {
    return this.http.get(`${this.baseUrl}item/${postId}.json`);
  }
}
