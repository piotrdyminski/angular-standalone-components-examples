import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { SquarePipe } from '../../pipes/square.pipe';

@Component({
  selector: 'basic',
  standalone: true,
  templateUrl: './basic.component.html',
  imports: [NgIf, HighlightDirective, SquarePipe],
})
export class BasicComponent {
  httpClient = inject(HttpClient);
  showText = true;
  number = 5;
}
