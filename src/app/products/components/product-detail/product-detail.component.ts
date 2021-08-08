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
      this.fechProductById(id);
    })
  }

  fechProductById(id: string){
    this._product.getProduct(id).subscribe(
      (res: Product) => {
        this.product = res;
      },
      (err) => {
        console.log(err);
    });
  }

  createProduct(){
    const product: Product = {
      id: '222',
      title: 'nuevo desde angular',
      description: 'bla bla bla',
      image: 'assets/images/banner-1.jpg',
      price: 10000
    }

    this._product.createProduct(product)
    .subscribe( res => {
      console.log(res);
    })
  }

  updateProduct(){
    const product: Product = {
      id: '222',
      title: 'nuevo desde angular updateadooo'
    }

    this._product.updateProduct( <string>product.id ,product)
    .subscribe( res => {
      console.log(res);
    })
  }
  deleteProduct(){
   
    this._product.deleteProduct('222')
    .subscribe( res => {
      console.log(res);
    })
  }
}
