import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private url = new URL(`https://api.escuelajs.co/api/v1/products`);
  getProducts(category_id?: string) {
    if (category_id) {
      this.url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Product[]>(this.url.toString());
  }

  getProductBySlug(slug?: string) {
    if (slug) {
      this.url.searchParams.set('categorySlug', slug);
    }
    return this.http.get<Product[]>(this.url.toString());
  }

  getOne(id: string) {
    return this.http.get<Product>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
  }
}
