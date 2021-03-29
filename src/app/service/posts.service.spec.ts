import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;
  const http = jasmine.createSpyObj('HttpClientTestingModule', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService],
    });
    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    service.fetchPosts('job');
    service.fetchPostID(786);
    expect(service.fetchPosts).toBeDefined();
    expect(service.fetchPostID).toBeDefined();
  });
});
