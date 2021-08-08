import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _http: HttpClient
  ) {

  }

  getAllProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${environment.url_api}/products/`);
  }

  getProduct(id: string): Observable<Product> {
    return this._http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this._http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string,changes: Partial<Product>): Observable<Product> {
    return this._http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string): Observable<Product> {
    return this._http.delete(`${environment.url_api}/products/${id}`);
  }

}
