import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsItemComponent } from '../app/components/posts-item/posts-item.component';

const routes: Routes = [
  { path: 'posts/:type', component: PostsItemComponent },
  { path: '', pathMatch: 'full', redirectTo: 'posts/top' },
  // { path: 'posts/new', redirectTo: 'posts/new' },
  // // { path: 'posts/ask', redirectTo: 'posts/ask' },

  // { path: 'posts/show', redirectTo: 'posts/show' },
  // { path: 'posts/job', redirectTo: 'posts/job' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
