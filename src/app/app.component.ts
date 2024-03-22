import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'standalone-examples';
  routes = [
    { path: '/basic', name: 'Basic' },
    { path: '/simple-counter', name: 'Simple counter' },
    { path: '/own-counter', name: 'Own counter' },
    { path: '/router-counter', name: 'Router counter' },
    { path: '/parent-child-counter', name: 'Parent-child counter' },
  ];
}
