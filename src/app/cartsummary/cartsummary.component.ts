import { Component, OnInit } from '@angular/core';
import { CartRepository } from '../services/CartRepository';
import { CartItem } from '../models/cartItem';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cartsummary',
  templateUrl: './cartsummary.component.html',
  styleUrl: './cartsummary.component.css'
})
export class CartsummaryComponent implements OnInit {

  constructor(private repo: CartRepository) { }
  ngOnInit(): void {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      console.log("No item has been added to the cart");
      return;
    }

    this.repo.Get(cartId).subscribe(data => {
      this.cartItems = data;
      console.log(this.cartItems);
    });
  }

  Remove(productId: number): void {

    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      cartId = '00000000-0000-0000-0000-000000000000';
    }
    let cart: Cart = {
      cartid: cartId,
      productId: productId,
      quantity: -1
    };
    this.repo.Add(cart).subscribe(data => {
      console.log(data);

      if (!localStorage.getItem('cartId')) {
        localStorage.setItem('cartId', data);
      }
    });
  }

  cartItems: CartItem[] = [];

}
