import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appPurple]'
})
export class PurpleDirective {

  constructor(
    private element: ElementRef
  ) {
    element.nativeElement.style.color = "#ad64ad";
   }

}
