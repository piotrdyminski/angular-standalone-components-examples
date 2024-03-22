import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  standalone: true,
})
export class SquarePipe implements PipeTransform {
  transform(number: number): number {
    return number ** 2;
  }
}
