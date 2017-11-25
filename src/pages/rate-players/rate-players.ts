import { Player } from './../../models/player.model';
import { Match } from './../../models/match.model';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'page-rate-players',
  templateUrl: 'rate-players.html',
})
export class RatePlayersPage implements OnInit {

  match: Match
  constructor(
    public matchServive: MatchService
  ){}


  ngOnInit(){
    this.matchServive.getMatch()
    .subscribe(
      data => {
        this.match = data
        console.log(data)
        console.log(this.match.team1.players[0].name);


      }

    )
    console.log('teste')
  }



  rate(p:Player, rate: number){
    p.rate = rate;
  }

  rateMatch(rate: number){
    this.match.rate = rate;
  }







  


}
