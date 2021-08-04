import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/models/product.model';

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

