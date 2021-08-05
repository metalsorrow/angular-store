import { Injectable } from '@angular/core';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Product>;


  constructor() {
    this.products = [
      {
        id: "1",
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla'
      },

      {
        id: "2",
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla'
      },

      {
        id: "3",
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla'
      },

      {
        id: "4",
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla'
      },

    ]
  }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string): Product {
    return <Product>this.products.find(item =>  id === item.id);
  }


}
