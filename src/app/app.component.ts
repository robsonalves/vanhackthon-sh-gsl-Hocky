import { EventsListPage } from './../pages/events-list/events-list';
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  isAuthenticated: boolean = false;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private authService : AuthService
  ) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Today's Events", component: HomePage },
      { title: 'All Events', component: EventsListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
     
     let authSubscription = this.authService.user$.subscribe(user => {

        if(user){
           this.rootPage = HomePage;
           authSubscription.unsubscribe();
           
        }else{
          this.rootPage = WalkthroughPage;
          authSubscription.unsubscribe();
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
