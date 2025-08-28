import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productResponse: ProductResponse[] = [];
  private urlApi = "https://dummyjson.com/products";

  constructor (
    private httpClient: HttpClient
  ){}

  getProducts(): Observable<ProductResponse>{
    return this.httpClient.get<ProductResponse>(this.urlApi);
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.urlApi}/${id}`);
  }

}
