import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators'

import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;
  constructor(
    private _service: CartService
    ) { 
    this.total$ = new Observable;
  }

  ngOnInit(): void {
    this.total$ = this._service.cart$
    .pipe(
      map(products => products.length)
    )
    // .subscribe( total =>{
    //   this.total = total;
    // } )
  }


}
