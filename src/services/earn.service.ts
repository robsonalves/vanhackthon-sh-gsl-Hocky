import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { RewardModel } from './../models/reward.model'
import { RewardDetailsPageModule } from '../pages/reward-details/reward-details.module';
import { Event } from "../models/event.model"
import { AuthService } from './auth.service';

@Injectable()
export class EarnService {
    constructor(
        private db: AngularFireDatabase,
        private authService: AuthService
    ) { }
    private rewardModel: RewardModel = new RewardModel();
    private rewardsRef = this.db.list<RewardModel>('rewards');

    addRewardFromEvent(event: Event){
        this.rewardModel.place = event.name;
        this.rewardModel.key = this.authService.getActiveUser().email;
        this.rewardModel.date = Date.now();
        this.rewardModel.point = 30;

        console.log(this.rewardModel)
        this.rewardsRef.push(this.rewardModel);
    }
   
}