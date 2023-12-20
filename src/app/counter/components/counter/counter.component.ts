import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 10;

  constructor(){
    console.log("asdfasdf")
  }

  modifyCounter(value:number){
    this.counter = this.counter + value;
  }
  resetCounter(){
    this.counter = 10;
  }
}
