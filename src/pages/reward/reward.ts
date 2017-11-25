import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RewardService } from '../../services/reward.service';
import { RewardModel } from '../../models/reward.model';
import { RewardDetailsPage } from '../reward-details/reward-details'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-list',
  templateUrl: 'reward.html'
})
export class RewardPage {
  totalPoints: number;
  point$: Observable<RewardModel[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rewardService: RewardService
  ) {
    this.sumTotalPoints();
  }

  sumTotalPoints() {
    this.point$ = this.rewardService
      .getRewardsDetails()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

    this.point$.forEach(points => {
      this.totalPoints = points.reduce(function (prevVal, value) {
        return prevVal + Number(value.point);
      }, 0);
    })
  }

  moreDetails() {
    this.navCtrl.push(RewardDetailsPage);
  }
}
