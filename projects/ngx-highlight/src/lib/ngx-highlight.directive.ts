import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[libNgxHighlight]',
})
export class NgxHighlightDirective {
  private readonly el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color = 'red'): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
