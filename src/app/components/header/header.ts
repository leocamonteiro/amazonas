import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart-service'; // ajuste o caminho conforme necessário

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private router = inject(Router);
  private cartService = inject(CartService);

  public cartCount = 0;

  constructor() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartCount = items.length;
    });
  }

  headerMenuButtons(page: string): void {
    if (page === 'home') {
      this.router.navigate(['/']);
    } else if (page === 'checkout') {
      this.router.navigate(['/checkout']);
    }
  }
}