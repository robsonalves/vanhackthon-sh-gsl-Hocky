import { MatchService } from './../services/match.service';
import { RatePlayersPage } from './../pages/rate-players/rate-players';
import { RatingComponent } from './../components/rating/rating';
import { AngularFireAuth } from 'angularfire2/auth';
import { EventsListPage } from './../pages/events-list/events-list';
import { GamePage } from './../pages/game/game';

import { AuthService } from './../services/auth.service';
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';
import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';

import { FIREBASE_CONFIG } from './firebase.credentials';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RewardPage } from '../pages/reward/reward';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EventService } from "../services/event.service";
import { RewardService } from "../services/reward.service";
import { HttpModule } from "@angular/http";

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { RewardModel } from '../models/reward.model';
import { ConcertPage } from '../pages/concert/concert';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastService } from '../services/toast.service';
import { RewardDetailsPage } from '../pages/reward-details/reward-details';
import { EarnService } from '../services/earn.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    SignupPage,
    WalkthroughPage,
    RewardPage,
    RewardDetailsPage,
    ConcertPage,
    GamePage,
    EventsListPage,
    RatingComponent,
    RatePlayersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    SignupPage,
    WalkthroughPage,
    RewardPage,
    RewardDetailsPage,
    ConcertPage,
    GamePage,
    EventsListPage,
    RatingComponent,
    RatePlayersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    EventService,
    RewardService,
    ToastService,
    MatchService,
    AngularFireAuth,
    EarnService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
