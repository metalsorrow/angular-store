import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[];
  private cart: BehaviorSubject<Product[]>;
  cart$: Observable<Product[]>;
  
  constructor() {
    this.products = [];
    this.cart = new BehaviorSubject<Product[]>([]);
    
    this.cart$ = this.cart.asObservable();
  }

  addCart(product: Product){
    this.products = [ ...this.products, product];
    this.cart.next(this.products);
  }
}
