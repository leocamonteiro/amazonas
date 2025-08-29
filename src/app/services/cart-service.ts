import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/models';

@Injectable({ providedIn: 'root' })
export class CartService {
  // Estado interno do carrinho
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  
  // Observable público para inscrição
  public cartItems$: Observable<Product[]> = this.cartItemsSubject.asObservable();

  // Adiciona um produto ao carrinho
  addToCart(product: Product): void {
    const currentItems = this.cartItemsSubject.getValue();
    this.cartItemsSubject.next([...currentItems, product]);
  }

  // Remove um produto pelo ID
  removeFromCart(productId: number): void {
    const updatedItems = this.cartItemsSubject.getValue().filter(p => p.id !== productId);
    this.cartItemsSubject.next(updatedItems);
  }

  // Limpa o carrinho
  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
}

