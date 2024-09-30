import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CategoryRepository {

	private apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) { }

	GetAll(): Observable<Category[]> {
		console.log(environment.apiUrl);
		const headers = new HttpHeaders()
			.set('Content-Type', 'application/json')
		// .set('Authorization', 'Bearer dummytoken');

		return this.http.get<Category[]>(`${this.apiUrl}/Category`, { headers });
	}
}
