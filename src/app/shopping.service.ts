import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  public _url = 'assets/data/products.json';

  constructor(private http: HttpClient) { }

  getProductDetails(): Observable<any> {
   return this.http.get(this._url);
  }
}
