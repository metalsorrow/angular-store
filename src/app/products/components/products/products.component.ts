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
    this.fetchProducts();
  }

  fetchProducts(){
    this._products.getAllProducts().subscribe(
      (res: Product[] ) => {
        this.products = res;
    },
      (err: any) => {
      
    });
  }

  clickProudct(id: string) {
    console.log(`product: ${id}`);
  }
}

