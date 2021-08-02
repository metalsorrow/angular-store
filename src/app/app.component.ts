import { Component } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent {
  items: Array<string>;
  products: Array<Product>;
  title = 'angular-base';

  constructor() {
    this.items = [];
    this.products = [{
      id: 1,
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla'

    }]
  }

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1)
  }

  clickProudct(id: number) {
    console.log(`product: ${id}`);
  }
}
