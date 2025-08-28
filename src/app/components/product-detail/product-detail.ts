import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs/operators';

import { ProductService } from '../../services/product-service';
import { Product } from '../../models/models';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  // Cria um Signal reativo que representa o produto atual
  public product = toSignal<Product>(
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.productService.getProductById(id))
    )
  );
}