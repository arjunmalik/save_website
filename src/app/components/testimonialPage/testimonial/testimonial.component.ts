import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class Testimonial {
   @Input() header;
   @Input() name;
   @Input() description;
   @Input() position;
   @Input() url;
   @ViewChild('img') image;

   ngAfterViewInit() {
     this.image.nativeElement.style.background = `url(${this.url}) center/cover no-repeat`;
   }
}
