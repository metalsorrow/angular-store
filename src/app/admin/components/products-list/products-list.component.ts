import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<Product>;
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
      private _product: ProductsService
    ) {
      this.products = [];
     }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts(){
    this._product.getAllProducts()
    .subscribe(products => {
      this.products = products
    })
  }

  deleteProduct(id: string){
    this._product.deleteProduct(id)
    .subscribe( res => {
      this.products = this.products.filter(el => el.id !== id)
      console.log(res);
    })
  }

}
