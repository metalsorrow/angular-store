import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private _products: ProductsService,
    private _router: Router
    ) {
    this.form = this.formBuild.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      price: [0,[Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  get priceField(){
    return this.form.get('price')
  }

  saveProduct(event: Event){
    event.preventDefault();

    if(this.form.valid){
      const product = this.form.value;
      
      this._products.createProduct(product)
      .subscribe((newProduct) => {
        this._router.navigate(['./admin/products'])
      })
    }
  }
}
