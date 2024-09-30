import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';

@Injectable({
	providedIn: 'root'
})
export class CartRepository {

	private apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) { }

	Get(cartId: string): Observable<CartItem[]> {
		return this.http.get<CartItem[]>(`${this.apiUrl}/Cart/${cartId}`);
	}

	Add(cart: Cart): Observable<string> {
		const headers = new HttpHeaders()
			.set('Content-Type', 'application/json')

		const data = JSON.stringify(cart);
		console.log(data);
		return this.http.post<string>(`${this.apiUrl}/Cart`,
			data,
			{ headers }
		);
	}
}
