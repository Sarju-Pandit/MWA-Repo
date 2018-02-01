import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-arr [arr] = "this.arrStr"></app-arr>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrStr: Array<String>;

  constructor() {
    this.arrStr = ["Hari Neupane", "Modern Web Applications", "CS572", "MUM"];
  }
}
