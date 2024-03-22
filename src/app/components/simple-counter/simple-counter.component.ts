import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'simple-counter',
  standalone: true,
  templateUrl: './simple-counter.component.html',
})
export class SimpleCounterComponent {
  counterService = inject(CounterService);
  counter = this.counterService.counter;

  increment(): void {
    this.counter.update((count) => ++count);
  }
}
