import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private _product: ProductsService
  ) {
    this.product = {};
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id: string = params.id;
      this.product = this._product.getProduct(id);
    });
  }

}
