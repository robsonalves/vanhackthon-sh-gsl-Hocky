import { Component, ViewChild } from '@angular/core';
import { Slides, NavController } from "ionic-angular";
import { SignupPage } from './../signup/signup';
import { SigninPage } from './../signin/signin';

@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {

  lastSlide: boolean;

  constructor(
    private nav:NavController
  ){}


  @ViewChild('slider') slider: Slides;

  skipIntro() {   
    this.lastSlide = true;
    this.slider.slideTo(this.slider.length());
  }

  onSlideChanged() {
    this.lastSlide = this.slider.isEnd();
  }

  goToLogin() {
    this.nav.push(SigninPage);
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

 

}
