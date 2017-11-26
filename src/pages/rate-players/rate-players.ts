import { Player } from './../../models/player.model';
import { Match } from './../../models/match.model';
import { MatchService } from './../../services/match.service';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-rate-players',
  templateUrl: 'rate-players.html',
})
export class RatePlayersPage implements OnInit {

  match: Match
  constructor(
    public matchService: MatchService,
    public toast : ToastService,
  ){}

  ngOnInit(){
    this.matchService.getMatch()
    .subscribe(
      data => {
        this.match = data
      }
    )
  }

  rate(p:Player, rate: number){
    p.rate = rate;
  }

  rateMatch(rate: number){
    this.match.rate = rate;
  }

  saveRatings(){
    console.log('to do save ratings');
    this.toast.show('You won 10 rewards points!');
  }

  public mat = 'match';
}
