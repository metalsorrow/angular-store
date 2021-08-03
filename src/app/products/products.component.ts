import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private _products: ProductsService
  ) 
  { 
    this.products = [];
  }

  ngOnInit(): void {
    this. products = this._products.getAllProducts();
  }


  clickProudct(id: string) {
    console.log(`product: ${id}`);
  }
}

