import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private urlApi = 'https://fakestoreapi.com/products';

  // Retorna um observable com a lista de produtos
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlApi);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.urlApi}/${id}`);
  }

}
