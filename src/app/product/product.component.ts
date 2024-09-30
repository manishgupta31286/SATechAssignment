import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductRepository } from '../services/ProductRepository';
import { CartRepository } from '../services/CartRepository';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private route: ActivatedRoute,
    private repo: ProductRepository,
    private cartRepository: CartRepository
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let categoryId = Number(params.get('id'));
      this.repo.GetByCategory(categoryId).subscribe(data => {
        this.products = data;
      });
    });
  }

  AddToCart(product: Product): void {
    console.log('AddToCart', product);
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      cartId = '00000000-0000-0000-0000-000000000000';
    }
    let cart: Cart = {
      cartid: cartId,
      productId: product.id,
      quantity: 1
    };
    this.cartRepository.Add(cart).subscribe(data => {
      console.log(data);

      if (!localStorage.getItem('cartId')) {
        localStorage.setItem('cartId', data);
      }
    });
  }
}
