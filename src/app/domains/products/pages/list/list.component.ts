import {
  Component,
  inject,
  signal,
  OnInit,
  OnChanges,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    ProductComponent,
    HeaderComponent,
    RouterLinkWithHref,
  ],
  templateUrl: './list.component.html',
})
export default class ListComponent implements OnInit, OnChanges {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  readonly slug = input<string>();
  products = signal<Product[]>([]);
  categories = toSignal(this.categoryService.getCategoriesColombina(), {
    initialValue: [] as Category[],
  });

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges() {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProductBySlug(this.slug()).subscribe({
      next: products => {
        this.products.set(products);
      },
      error: () => {
        throw new Error();
      },
    });
  }

  private getCategories() {
    return this.categories.set(this.categoryService.getCategoriesColombina());
    // this.categoryService.getAll().subscribe({
    //   next: categories => {
    //     this.categories.set(categories);
    //   },
    //   error: () => {
    //     throw new Error();
    //   },
    // });
  }
}
