import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

/**
 * Reveals an element on scroll using IntersectionObserver.
 * Usage: <div appReveal [revealDelay]="120">…</div>
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    this.renderer.addClass(node, 'reveal');

    if (this.revealDelay) {
      this.renderer.setStyle(node, 'transition-delay', `${this.revealDelay}ms`);
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(node, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(node, 'is-visible');
            this.observer?.unobserve(node);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
