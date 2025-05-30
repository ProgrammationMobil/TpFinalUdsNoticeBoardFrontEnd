import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHideOnScroll]',
  standalone:true
})
export class HideOnScrollDirective {
  private lastScrollTop = 0;
  private threshold = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('ionScroll', ['$event'])
  onContentScroll(event: CustomEvent) {
    const scrollTop = event.detail.scrollTop;

    if (scrollTop > this.lastScrollTop + this.threshold) {
      // Scroll vers le bas → cacher
      this.toggleVisibility(true);
    } else if (scrollTop < this.lastScrollTop - this.threshold) {
      // Scroll vers le haut → afficher
      this.toggleVisibility(false);
    }

    this.lastScrollTop = scrollTop;
  }

  private toggleVisibility(hide: boolean) {
    const header = document.querySelector('ion-header');
    const tabbar = document.querySelector('ion-tab-bar');

    if (header) {
      this.renderer.setStyle(header, 'transform', hide ? 'translateY(-100%)' : 'translateY(0)');
      this.renderer.setStyle(header, 'transition', 'transform 0.3s ease');
    }

    if (tabbar) {
      this.renderer.setStyle(tabbar, 'transform', hide ? 'translateY(100%)' : 'translateY(0)');
      this.renderer.setStyle(tabbar, 'transition', 'transform 0.3s ease');
    }
  }
}
