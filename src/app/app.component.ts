import { EventsListPage } from './../pages/events-list/events-list';
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  isAuthenticated: boolean = false;

  
  rootPage: any;// = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Today's Events", component: HomePage },
      { title: 'All Events', component: EventsListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      firebase.initializeApp({
        apiKey: "AIzaSyAgPZIz8uvjDWjH5a9uoGmICy-7Yi7P2Ng",
        authDomain: "gslapp-8d198.firebaseapp.com",
        databaseURL: "https://gslapp-8d198.firebaseio.com",
        projectId: "gslapp-8d198",
        storageBucket: "gslapp-8d198.appspot.com",
        messagingSenderId: "1047993594422"
      });


      firebase.auth().onAuthStateChanged(user =>{
        if(user){
          this.isAuthenticated = true;
          this.rootPage = HomePage;
        }
        else{
          this.isAuthenticated = false;
          this.rootPage = WalkthroughPage;

        }

      })
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
