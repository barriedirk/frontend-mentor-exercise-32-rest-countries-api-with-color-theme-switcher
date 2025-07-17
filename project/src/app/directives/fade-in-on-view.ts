import { Directive, ElementRef, Input, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeInOnView]',
  standalone: true,
})
export class FadeInOnView implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  @Input() fadeInDelay = 0; // optional stagger

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = this.el.nativeElement;

          this.renderer.setStyle(element, 'transition-delay', `${this.fadeInDelay}ms`);
          this.renderer.addClass(element, 'fade-in');

          this.observer.unobserve(element);
        }
      },
      { threshold: 0.1 },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
