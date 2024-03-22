import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';

@NgModule({
  imports: [NgIf, HighlightDirective],
  exports: [NgIf, HighlightDirective],
})
export class CustomCommonModule {}
