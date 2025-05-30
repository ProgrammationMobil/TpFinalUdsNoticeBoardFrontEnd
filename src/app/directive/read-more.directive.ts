import {  Directive, ElementRef, Input, Renderer2, OnInit,  SimpleChanges,
  OnChanges} from '@angular/core';

@Directive({
  selector: '[appReadMore]',
  standalone: true,
})
export class ReadMoreDirective implements OnChanges {

  @Input() text: string = '';
  @Input() limit!: number ;


  private isExpanded = false;
  private toggleLink!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      this.updateView();
    }
  }

  private updateView(): void {
    const fullText = this.text || '';
    const truncatedText = fullText.length > this.limit
      ? fullText.substring(0, this.limit) + '...'
      : fullText;

    const displayText = this.isExpanded ? fullText : truncatedText;
    const linkText = this.isExpanded ? ' Voir moins' : ' Voir plus';

    this.el.nativeElement.innerText = displayText;

    if (!this.toggleLink) {
      this.toggleLink = this.renderer.createElement('a');
      this.renderer.setStyle(this.toggleLink, 'color', '#007bff');
      this.renderer.setStyle(this.toggleLink, 'cursor', 'pointer');
      this.renderer.listen(this.toggleLink, 'click', () => this.toggle());
    }

    this.toggleLink.innerText = linkText;
    this.renderer.appendChild(this.el.nativeElement, this.toggleLink);
  }

  private toggle(): void {
    this.isExpanded = !this.isExpanded;
    this.updateView();
  }
}
