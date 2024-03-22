import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { ChildCounterComponent } from '../child-counter/child-counter.component';

@Component({
  selector: 'parent-counter',
  standalone: true,
  templateUrl: './parent-counter.component.html',
  imports: [ChildCounterComponent],
})
export class ParentCounterComponent {
  counterService = inject(CounterService);
  counter = this.counterService.counter;

  increment(): void {
    this.counter.update((count) => ++count);
  }
}
