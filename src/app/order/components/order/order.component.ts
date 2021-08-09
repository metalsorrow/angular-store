import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable< Product[] >;

  constructor(
    private _cart: CartService
  ) { 
    this.products$ = this._cart.cart$;

  }

  ngOnInit(): void {
  }

}
