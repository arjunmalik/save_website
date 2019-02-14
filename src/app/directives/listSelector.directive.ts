import { Directive,
  ElementRef,
  Renderer,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges } from '@angular/core';

@Directive({
  selector: '[listSelector]'
})
export class ListSelector implements OnInit, OnChanges {
  @Input() select: boolean;
  constructor(private elref: ElementRef, private renderer: Renderer) {
  }
  ngOnInit() {
    if(!this.select) {
      this.renderer.setElementStyle(this.elref.nativeElement,'background', 'grey');
    }
  }

  ngOnChanges(changes) {
    if(!changes.select.currentValue) {
      this.renderer.setElementStyle(this.elref.nativeElement,'background', 'grey');
    }
    else {
      this.renderer.setElementStyle(this.elref.nativeElement,'background', 'white');
    }
  }
}
