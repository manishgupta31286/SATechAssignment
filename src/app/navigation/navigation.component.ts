import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../services/CategoryRepository';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  categories: Category[] = [];

  constructor(private repo: CategoryRepository) { }

  ngOnInit(): void {
    this.repo.GetAll().subscribe(data => {
      this.categories = data;
    });
  }
}
