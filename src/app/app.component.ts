import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean = true;
  code: string;
  @ViewChild('effect') eDiv;
  @ViewChild('title') title;
  @ViewChild('top') top;

  constructor() {
    this.code = `jkjk`;
   }

   onBlur() { }
 onFocus() { }

  ngAfterViewInit () {
    this.loading = false;
    this.eDiv.nativeElement.style.transform = 'scaleX(0) scaleY(0)';
    setTimeout(() => {
      this.eDiv.nativeElement.style.transform = 'scaleX(1) scaleY(1)';
    }, 0);
    // this.top.nativeElement.style.transform = 'scaleX(1) scaleY(1)';
    // setTimeout(() => this.eDiv.nativeElement.style.transform = 'scaleX(4) scaleY(4)', 0);
    setTimeout(() => {
      this.title.nativeElement.style.opacity = '1';
    }, 1100);
    setTimeout(() => {
      this.top.nativeElement.style.transform = 'scaleX(0) scaleY(0)';
      this.eDiv.nativeElement.style.transform = 'scaleX(0) scaleY(0)';
    }, 6300);
  }
}
