import { Component, ViewEncapsulation, ViewChild, ViewChildren } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'projects',
  templateUrl: './projectPage.component.html',
  styleUrls: ['./projectPage.component.css']
})
export class ProjectPage {
  quotes: string[] = ['Food is the necessity of everyone',
                      'Education is the key to success',
                      'Equal emphasis should be given to everyone'];
  selected: boolean[] = [false, true, false];
  imagePath: string[] = ['https://image.ibb.co/ndsxAL/Food.jpg', 'https://image.ibb.co/hjt4qL/Education.jpg', 'https://image.ibb.co/nn7VVL/Importance.jpg'];
  liClicked: boolean = false;

  @ViewChild('first') fDiv;
  @ViewChild('second') sDiv;
  @ViewChild('enclosing') enclosing;
  @ViewChild('bg') bg;
  @ViewChildren('quote') quoteDivs;

  quoteDivsElement: any[];

  constructor() {
    var v = interval(2500);
    v.subscribe((m) => {
      var index = this.selected.indexOf(true);
      this.onLiSelect((index+1) % 3);
    });
  }

  ngAfterViewInit() {
    this.quoteDivsElement = this.quoteDivs.toArray();
    this.fDiv.nativeElement.style.transform = 'translateX(-54vw)';
    this.sDiv.nativeElement.style.transform = 'translateX(54vw)';
    console.log(this.quoteDivs);
    this.selected.forEach(function (select, index){
      if(select) {
        this.quoteDivsElement[index].nativeElement.style.top = '0';
      }
      else {
        this.quoteDivsElement[index].nativeElement.style.top = '170px';
      }
    }.bind(this));
  }

  onLiSelect(index) {

    if ((this.selected.indexOf(true) == index) || this.liClicked) {
      this.liClicked = false;
      return;
    }

    this.liClicked = true;
    var ind = this.selected.indexOf(true);
    this.selected[ind] = false;
    this.selected[index] = true;
    this.fDiv.nativeElement.style.transform = 'translateX(0)';
    this.sDiv.nativeElement.style.transform = 'translateX(0)';

    setTimeout(function (){
      this.bg.nativeElement.style.background = `url(${this.imagePath[index]}) center/cover no-repeat`;
      this.selected.forEach(function (select, index){
        if(select) {
          this.quoteDivsElement[index].nativeElement.style.top = '0';
          this.quoteDivsElement[index].nativeElement.style.opacity = '1';
        }
        else {
          this.quoteDivsElement[index].nativeElement.style.top = '100px';
          this.quoteDivsElement[index].nativeElement.style.opacity = '0';
        }
      }.bind(this));
      setTimeout(() => {
        this.fDiv.nativeElement.style.transform = 'translateX(-54vw)';
        this.sDiv.nativeElement.style.transform = 'translateX(54vw)';
      }, 100);
    }.bind(this), 1000);
  }
}
