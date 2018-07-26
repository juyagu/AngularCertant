import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltarInput]'
})
export class ResaltarInputDirective {

  @Input() appResaltarInput: string;
  @Input() defaultColor: string;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    //this.highlight(this.appResaltarInput || 'red');
    this.highlight(this.appResaltarInput || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
