import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'router-counter',
  standalone: true,
  templateUrl: './router-counter.component.html',
})
export class RouterCounterComponent {
  counterService = inject(CounterService);
  counter = this.counterService.counter;

  increment(): void {
    this.counter.update((count) => ++count);
  }
}
