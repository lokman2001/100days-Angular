import { Directive , Renderer2 , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {
  public ripple = "ripple"
  constructor(public elementRef : ElementRef ,public renderer : Renderer2) { }

  @HostListener('mouseenter') onHover() {
    this.renderer.addClass(this.elementRef.nativeElement,this.ripple)
  }

}
