import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuild: FormBuilder,
    private _products: ProductsService,
    private _router: Router,
    private activeRoute: ActivatedRoute,
    ) {
    this.id = "";
    this.form = this.formBuild.group({
      title: ['',[Validators.required]],
      price: [0,[Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['',[Validators.required]],
    })
  }

  ngOnInit(): void {
    this.activeRoute.params
    .subscribe( (params: Params) => {
      this.id = params.id;
      this._products.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product)
      })
    })
  }

  get priceField(){
    return this.form.get('price')
  }

  saveProduct(event: Event){
    event.preventDefault();

    if(this.form.valid){
      const product = this.form.value;
      
      this._products.updateProduct(this.id, product)
      .subscribe((newProduct) => {
        this._router.navigate(['./admin/products'])
      })
    }
  }
}
