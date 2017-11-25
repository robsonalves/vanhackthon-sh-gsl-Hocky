import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'
import { AngularFireDatabase } from 'angularfire2/database';
import { RewardModel } from './../models/reward.model'
import { pointerCoord } from 'ionic-angular/util/dom';

@Injectable()
export class RewardService {

    private rewardsRef = this.db.list<RewardModel>('rewards');

    constructor(
        private http: Http,
        private db: AngularFireDatabase
    ) { }

    getRewardsDetails() {
       return this.rewardsRef;
    }
}