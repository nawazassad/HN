import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientModule } from '@angular/common/http';

import { PostsItemComponent } from './posts-item.component';
import { PostsService } from 'src/app/service/posts.service';

describe('PostsItemComponent', () => {
  let component: PostsItemComponent;
  let fixture: ComponentFixture<PostsItemComponent>;
  let service: PostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],

      declarations: [PostsItemComponent],
      providers: [PostsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.posts = [];
    component.postsIndex = 0;

    component.ngOnInit();
    expect(component).toBeDefined();
  });
});
