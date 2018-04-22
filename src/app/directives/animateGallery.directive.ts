import {Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[animateGallery]'
})
export class AnimateGalleryDirective{

  @HostListener('click')
  task() {
    this.renderer.removeClass(this.renderer.selectRootElement('.js-animate-active-photo'), 'animate-active');
    //add class
    setTimeout(() => {
      this.renderer.addClass(this.renderer.selectRootElement('.js-animate-active-photo'), 'animate-active');
    }, 100);
  }
  constructor( private renderer: Renderer2){}
}
