import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/product-service';
import { CartService } from '../../services/cart-service';
import { Product } from '../../models/models';
import { Loading } from '../loading/loading';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, Loading],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  showCartAnimation = false;


  public product = toSignal<Product>(
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.productService.getProductById(id))
    )
  );

  get currentProduct(): Product | undefined {
    return this.product();
  }

  addProductToCart(productId: number) {
    const currentProduct = this.product();
    if (currentProduct && currentProduct.id === productId) {
      this.cartService.addToCart(currentProduct);

      // Exibe a animação
      this.showCartAnimation = true;
      setTimeout(() => {
        this.showCartAnimation = false;
      }, 2000);

      
    }
  }

}

