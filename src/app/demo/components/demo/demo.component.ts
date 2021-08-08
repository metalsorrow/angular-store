import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  items: Array<string>;

  title = 'angular-base';
  power = 10;

  constructor() {
    this.items = [];
   }

  ngOnInit(): void {
  }


  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1)
  }

}
