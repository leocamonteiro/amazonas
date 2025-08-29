import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ProductCard } from '../product-card/product-card';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Loading } from '../loading/loading';


@Component({
  selector: 'app-product-list',
  imports: [ ProductCard, Loading ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {

   private productService = inject(ProductService);
   public produtos = toSignal(this.productService.getProducts());   
   public router = inject(Router)

  openDetail(id: number): void {
    this.router.navigate(['/produto', id]);
  }
}
