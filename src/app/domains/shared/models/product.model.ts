import { Category } from './category.model';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  promotion?: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
  slug: string;
}
