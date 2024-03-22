import { Routes } from '@angular/router';
import { CounterService } from './services/counter.service';
import { BasicComponent } from './components/basic/basic.component';

export const routes: Routes = [
  {
    path: 'basic',
    loadComponent: () =>
      import('./components/basic/basic.component').then(
        (m) => m.BasicComponent
      ),
  },
  {
    path: 'simple-counter',
    loadComponent: () =>
      import('./components/simple-counter/simple-counter.component').then(
        (m) => m.SimpleCounterComponent
      ),
  },
  {
    path: 'own-counter',
    loadComponent: () =>
      import('./components/own-counter/own-counter.component').then(
        (m) => m.OwnCounterComponent
      ),
  },
  {
    path: 'router-counter',
    providers: [CounterService],
    loadComponent: () =>
      import('./components/router-counter/router-counter.component').then(
        (m) => m.RouterCounterComponent
      ),
  },
  {
    path: 'parent-child-counter',
    loadComponent: () =>
      import('./components/parent-counter/parent-counter.component').then(
        (m) => m.ParentCounterComponent
      ),
  },
];
