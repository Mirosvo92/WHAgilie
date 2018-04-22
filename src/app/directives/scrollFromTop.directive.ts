import {Directive, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[scrollTracker]',
})
export class ScrollFromTop {
  @Output() scrolled = new EventEmitter<any>();

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    let tracker = (window.innerHeight + window.pageYOffset);
    let limit = document.body.offsetHeight;
    let endReached = false;

    if (Math.round(tracker) === Math.round(limit)) {
      endReached = true;
    }

    this.scrolled.emit({
      endReached
    })
  }
}
