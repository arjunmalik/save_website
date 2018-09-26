import { Component } from '@angular/core';
import { ImageProvider } from '../../services/imageProvider.service';

@Component({
  selector: 'home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css'],
})
export class HomePage {
  imgPos: any[] = [];
  imgArray: string[];
  imgProvider: ImageProvider;
  posJustify: number;
  max: number;
  min: number;
  clicked: boolean;
  constructor(imgProvider: ImageProvider){
    this.imgProvider = imgProvider;
    console.log('here'  +imgProvider);
  }
  ngOnInit(){
    this.imgArray = this.imgProvider.imagesArray;
    let length = this.imgArray.length;
    this.posJustify = Math.trunc(length/2);
    this.imgArray.forEach(function(img, index){
      this.imgPos[index] = index-this.posJustify;
    }.bind(this));
    this.min = this.imgPos[0];
    this.max = this.imgPos[length-1];
    console.log(this.imgPos);
  }

  leftImage() {
    if (this.clicked) {
      return;
    }
    setTimeout(() => {
      this.imgPos.forEach((pos, ind) => {
        this.imgPos[ind]--;
        if(this.imgPos[ind] < this.min) {
          this.imgPos[ind] = this.max;
        }
        this.clicked = false;
      });
      console.log(this.imgPos);
    }, 500);
    this.clicked = true;
  }

  rightImage() {
    if (this.clicked) {
      return;
    }
    setTimeout(() => {
      this.imgPos.forEach((pos, ind) => {
        this.imgPos[ind]++;
        if(this.imgPos[ind] > this.max) {
          this.imgPos[ind] = this.min;
        }
        this.clicked = false;
      });
    }, 500);
    this.clicked = true;
  }
}
