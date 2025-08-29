import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { Product } from '../../models/models';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss'
})
export class CartSummaryComponent {
  private cartService = inject(CartService);
  public cartItems: Product[] = [];
  public total = 0;

  constructor() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.total = items.reduce((sum, item) => sum + item.price, 0);
    });
  }
}