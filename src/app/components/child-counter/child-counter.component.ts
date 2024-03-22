import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'child-counter',
  standalone: true,
  templateUrl: './child-counter.component.html',
  providers: [CounterService],
})
export class ChildCounterComponent {
  counterService = inject(CounterService);
  counter = this.counterService.counter;

  increment(): void {
    this.counter.update((count) => ++count);
  }
}
