import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})

export class AnimateAppDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    setTimeout(() => {
      this.renderer.addClass(this.elementRef.nativeElement, 'animate-active');
    }, 500);
  }
}
