import { Directive,
  ElementRef,
  Renderer,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges } from '@angular/core';

@Directive({
  selector: '[imageSelector]'
})
export class ImageSelector implements OnInit, OnChanges {
  @Input() imgPos: number;
  constructor(private elref: ElementRef, private renderer: Renderer) {

     console.log(elref);
  }
  ngOnInit() {
    console.log(this.imgPos);
    this.renderer.setElementStyle(this.elref.nativeElement,'transform', `translate(${100*this.imgPos}vw)`);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes.imgPos.previousValue <0 && changes.imgPos.currentValue > 0) ||
       (changes.imgPos.previousValue >0 && changes.imgPos.currentValue < 0))
     {
      this.renderer.setElementStyle(this.elref.nativeElement,'opacity', '0');
      this.renderer.setElementStyle(this.elref.nativeElement,'transform', `translate(${100*this.imgPos}vw)`);
    }
    else {
      this.renderer.setElementStyle(this.elref.nativeElement,'opacity', '0.8');
      this.renderer.setElementStyle(this.elref.nativeElement,'transform', `translate(${100*this.imgPos}vw)`);
    }
  }
}
