import { Component, OnInit } from '@angular/core';
import { CartRepository } from '../services/CartRepository';
import { CartItem } from '../models/cartItem';

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

  cartItems: CartItem[] = [];

}
