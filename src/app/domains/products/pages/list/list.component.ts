import { Component, inject, signal, OnChanges, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { toSignal, rxResource } from '@angular/core/rxjs-interop';
import { CarouselComponent } from '@shared/components/carrusel/carrusel.component';
import { promotionProducts } from 'src/app/domains/const/promotion-products.const';
import { categories } from 'src/app/domains/const/categories.const';
import { products } from 'src/app/domains/const/products.const';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    ProductComponent,
    RouterLinkWithHref,
    CarouselComponent,
  ],
  templateUrl: './list.component.html',
})
export default class ListComponent implements OnChanges {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  readonly slug = input<string>();
  products = signal<Product[]>([]);
  slides = [
    { src: 'https://i.imgur.com/NbCA4Ca.jpeg', alt: 'Montañas', promotion: '30% en segundo articulo' },
    { src: 'https://i.imgur.com/L8EgPNP.jpeg', alt: 'Lago al atardecer', promotion: '20% en productos seleccionados' },
    { src: 'https://i.imgur.com/p3tOmLN.jpeg', alt: 'Ciudad de noche', promotion: '15% en compras mayores a $100' },
  ];

  promtions: Product[] = promotionProducts;
  categories: Category[] = categories;
  colombinaProducts: Product[] = products;
  carrosuelProducts: Product[] = promotionProducts;
  categoriesResources = rxResource({
    loader: () => this.categoryService.getAll(),
  });

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

  resetCategory() {
    this.categoriesResources.set([]);
  }

  reloadCategories() {
    this.categoriesResources.reload();
  }
}
