import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>COUNTER</h1>
  <button (click) = "decrease()"> - </button>
  {{counterValue}}
  <button (click) = "increase()"> + </button>
  <br/>
  {{counterMessage}}
  `,
  styles: ['h1 {color: green}']
})
export class CounterComponent implements OnInit {

  @Input() counterValue:number = 0;
  @Input() counterMessage:string = "";
  
  @Output() counterChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
  }

  increase() {
    this.counterValue = this.counterValue + 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  decrease() {
    this.counterValue = this.counterValue - 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }
}