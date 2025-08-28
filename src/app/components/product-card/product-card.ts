import { Component, Input } from '@angular/core';
import { Product } from '../../models/models';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [ CurrencyPipe ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product!: Product;
}
