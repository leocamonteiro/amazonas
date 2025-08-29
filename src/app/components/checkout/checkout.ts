import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartSummaryComponent } from '../cart-summary/cart-summary';
import { CartService } from '../../services/cart-service'; // ajuste o caminho conforme necessário

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CartSummaryComponent],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class Checkout {
  checkoutForm: FormGroup;
  orderCompleted = false;
  hasItems = false;

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.checkoutForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.cartService.cartItems$.subscribe(items => {
      this.hasItems = items.length > 0;
    });
  }

  get fullName() {
    return this.checkoutForm.get('fullName');
  }

  get address() {
    return this.checkoutForm.get('address');
  }

  get email() {
    return this.checkoutForm.get('email');
  }

  submitOrder() {
    if (this.checkoutForm.valid) {
      this.cartService.clearCart();
      this.checkoutForm.reset();
      this.orderCompleted = true;
    }
  }
}