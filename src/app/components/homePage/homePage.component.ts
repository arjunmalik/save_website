import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {
      trigger,
      state,
      style,
      transition,
      animate,
      keyframes
    } from '@angular/animations';
import { ImageProvider } from '../../services/imageProvider.service';
import { ListIcons } from '../shared/listIcons/listIcons.component';
import { Codemirror } from 'codemirror';
import 'codemirror';
@Component({
  selector: 'home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css'],
  animations: [
    trigger('currentImagePos', [
      state('selected', style({
        // opacity: '1',
        transform: 'translateY(-1em)'
      })),
      state('invisible', style({
        // opacity: '0',
        transform: 'translateY(0)'
      })),
      transition('selected => invisible', [
          animate(450, keyframes([
          style({
            transform: 'translateY(-1em)',
            // opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateY(-0.9em)',
            // opacity: 0.5,
            offset: 0.6
          }),
          style({
            transform: 'translateY(-0.75em)',
            // opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateY(-0.5em)',
            // opacity: 0.5,
            offset: 0.9
          }),
          style({
            transform: 'translateY(0)',
            // opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('invisible => selected', [
          animate(1000, keyframes([
          style({
            transform: 'translateY(0)',
            // opacity: 1,
            offset: 0.45
          }),
          style({
            transform: 'translateY(-0.5em)',
            // opacity: 0.5,
            offset: 0.7
          }),
          style({
            transform: 'translateY(-0.75em)',
            // opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateY(-0.9em)',
            // opacity: 0.5,
            offset: 0.9
          }),
          style({
            transform: 'translateY(-1em)',
            // opacity: 1,
            offset: 1
          })
        ]))
      ])
    ]),
    trigger('currentDetailsPos', [
      state('selected', style({
        transform: 'translateY(-9em)'
      })),
      state('invisible', style({
        transform: 'translateY(0)'
      })),
      transition('selected => invisible', [
          animate(450, keyframes([
          style({
            transform: 'translateY(-9em)',
            // opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateY(-0.8em)',
            // opacity: 0.5,
            offset: 0.6
          }),
          style({
            transform: 'translateY(-0.7em)',
            // opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateY(-4.5em)',
            // opacity: 0.5,
            offset: 0.9
          }),
          style({
            transform: 'translateY(0)',
            // opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('invisible => selected', [
          animate(1000, keyframes([
          style({
            transform: 'translateY(0)',
            // opacity: 1,
            offset: 0.45
          }),
          style({
            transform: 'translateY(-4.5em)',
            // opacity: 0.5,
            offset: 0.7
          }),
          style({
            transform: 'translateY(-7em)',
            // opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateY(-8em)',
            // opacity: 0.5,
            offset: 0.9
          }),
          style({
            transform: 'translateY(-9em)',
            // opacity: 1,
            offset: 1
          })
        ]))
      ])
    ])
  ]})
export class HomePage {
  arrQuotes: string[] = ['You', 'Challenge', "brahma "];
  arrQuotes1: string[] = ['matter.', 'limits.' ,'jijnasa.'];
  arrDetails: string[] = ['OUR INDUSTRY LEADING MASTER COACHES have come together to give you the best experience & make sure no one is left behind.',
                          'We believe with proper training and guidance, everyone can shine in their own field and become the leaders of tomorrow.',
                          'We give equal emphasis on spiritual growth of each individual, we believe to be leaders of tommorrow, we need to be strong inside.',
                          'OUR INDUSTRY LEADING MASTER COACHES HAVE COLLABORATED TO BRING YOU THE BEST AND MOST RELEVANT CONTENT TO FUEL YOUR TRAINING AND RACING4.',
                          'OUR INDUSTRY LEADING MASTER COACHES HAVE COLLABORATED TO BRING YOU THE BEST AND MOST RELEVANT CONTENT TO FUEL YOUR TRAINING AND RACING5.',
                          'OUR INDUSTRY LEADING MASTER COACHES HAVE COLLABORATED TO BRING YOU THE BEST AND MOST RELEVANT CONTENT TO FUEL YOUR TRAINING AND RACING6.']
  quotesPos: string[] = ['invisible' ,'selected', 'invisible'];
  quotesPos1: string[] = ['invisible' ,'selected', 'invisible'];
  imgPos: any[] = [];
  imgArray: string[];
  imgProvider: ImageProvider;
  posJustify: number;
  max: number;
  min: number;
  clicked: boolean;
  liClicked: boolean = false;
  constructor(imgProvider: ImageProvider){
    this.imgProvider = imgProvider;
    console.log('here'  +imgProvider);
    var v = interval(5000);
    v.subscribe(function (m){
      if(!this.liClicked) {
        this.onLiSelect((this.quotesPos.indexOf("selected")+1)%3);
      }
      this.liClicked = false;
    }.bind(this));
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
    // this.quotesPos.unshift(this.quotesPos.pop());

    console.log(this.quotesPos);
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
    // this.quotesPos.push(this.quotesPos.shift());

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

  onLiSelect(index) {
    if (this.quotesPos.indexOf("selected") == index) {
      return;
    }
    this.liClicked = true;
    var ind = this.quotesPos.indexOf("selected");
    this.quotesPos[ind] = "invisible";
    this.quotesPos[index] = "selected";
    setTimeout(() => {
      this.quotesPos1[ind] = "invisible";
      this.quotesPos1[index] = "selected";
    }, 40);
  }
}
