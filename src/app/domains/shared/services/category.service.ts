import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { categories } from '../../const/categories.const';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<Category[]>(
      `https://api.escuelajs.co/api/v1/categories`
    );
  }

  getCategoriesColombina() {
    return categories.map(category => {
      return {
        id: category.id,
        name: category.name,
        image: category.image,
        slug: category.slug,
      } as Category;
    });
  }
}
