import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent implements OnInit {


  @Input() max:number = 5;
  @Output() valueChanged = new EventEmitter();

  value = 0;

  range: Array<Number>;

  constructor() {
  }

  ngOnInit() {
    let states: Array<number> = [];
    for (let i = 0; i < this.max; i++) {
        states[i] = 0;
    }

    this.range = states;
  }

  rate(val){
    this.value = val;
    this.valueChanged.emit(this.value);
  }





}
