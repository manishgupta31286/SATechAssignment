import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ProductRepository {

	private apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) { }

	GetAll(): Observable<Product[]> {
		return this.http.get<Product[]>(`${this.apiUrl}/Products`);
	}

	GetByCategory(categoryId: number): Observable<Product[]> {
		return this.http.get<Product[]>(`${this.apiUrl}/Products/GetByCategoryId/${categoryId}`);
	}

	GetById(id: number): Observable<Product> {
		return this.http.get<Product>(`${this.apiUrl}/Products/${id}`);
	}
}
