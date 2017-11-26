import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { RewardModel } from './../models/reward.model'

@Injectable()
export class RewardService {

    private rewardsRef = this.db.list<RewardModel>('rewards');

    constructor(
        private db: AngularFireDatabase
    ) { }

    getAllRewardsDetails() {
        return this.rewardsRef;
    }

    getRewardsDetails(key: string) {
        return this.db.list("/rewards",
            ref => ref.orderByChild("key").equalTo(key));
    }
}