import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'hackerNews';
  navLinks = [
    { location: 'posts/top', label: 'Top Stories' },
    { location: 'posts/new', label: 'New' },
    { location: 'posts/show', label: 'Show' },
    { location: 'posts/job', label: 'Jobs' },
  ];
}
