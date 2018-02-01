import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arr',
  template: `
    <h1>Array of string as input and displaying as un-ordered list.</h1>
    <div>
      <ul>
        <li *ngFor="let str of arr"> {{str}} </li>
      </ul>
    </div>

    <h1>Custom directive "upper" used to convert elements to uppercase</h1>
    <div>
      <ul>
        <li *ngFor="let str of arr" upper> {{str}} </li>
      </ul>
    </div>

    <h1>Custom directive "visibility" used to show or hide contents</h1>
    <div>
      <ul myvisibility [visible] = "this.visible">
        <li *ngFor="let str of arr"> {{str}} </li>
      </ul>
    </div>

    <h1>Custom directive "mycolor" used to show color change from array of color</h1>
    <div>
      <ul>
        <li *ngFor="let str of arr" mycolor (colorChange) = "colorChange($event)"> {{str}} </li>
      </ul>
    </div>
    {{changedColor}}
  `,
  styleUrls: ['./arr.component.css'],
  inputs: ['arr']
})
export class ArrComponent implements OnInit {

  visible:Boolean = false;
  changedColor?: string;

  constructor() {}

  ngOnInit() {
  }

  colorChange(color: string) {
    this.changedColor = "Selected color is " + color;
  }

}
