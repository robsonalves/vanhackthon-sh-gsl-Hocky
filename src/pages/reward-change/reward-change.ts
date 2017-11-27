import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RewardService } from '../../services/reward.service';
import { AuthService } from '../../services/auth.service';

@IonicPage()

@Component({
  selector: 'page-reward-change',
  templateUrl: 'reward-change.html'
})

export class RewardChangePage {
  prizes: Array<{
    description: string,
    price: number
  }>;

  constructor(
    public navCtrl: NavController,
  ) {
    this.prizes = [{
      description: 'Ticket for next game',
      price: 30
    },
    {
      description: 'Vuvuzela',
      price: 60
    },
    {
      description: 'Shirt',
      price: 150
    },
    {
      description: 'Selfie on the big screen',
      price: 500
    }];
  }

}
