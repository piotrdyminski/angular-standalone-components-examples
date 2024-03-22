import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'own-counter',
  standalone: true,
  templateUrl: './own-counter.component.html',
  providers: [CounterService],
})
export class OwnCounterComponent {
  counterService = inject(CounterService);
  counter = this.counterService.counter;

  increment(): void {
    this.counter.update((count) => ++count);
  }
}
