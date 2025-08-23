import { Product } from '@shared/models/product.model';

export const products: Product[] = [
  {
    id: 7,
    title: 'Classic Comfort Drawstring Joggers',
    slug: 'classic-comfort-drawstring-joggers',
    price: 79,
    description:
      'Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2025-08-04T21:37:58.000Z',
      updatedAt: '2025-08-04T21:37:58.000Z',
    },
    images: [
      'https://i.imgur.com/mp3rUty.jpeg',
      'https://i.imgur.com/JQRGIc2.jpeg',
    ],
    creationAt: '2025-08-04T21:37:58.000Z',
    updatedAt: '2025-08-04T21:37:58.000Z',
  },
  {
    id: 8,
    title: 'Classic Red Jogger Sweatpants',
    slug: 'classic-red-jogger-sweatpants',
    price: 98,
    description:
      'Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2025-08-04T21:37:58.000Z',
      updatedAt: '2025-08-04T21:37:58.000Z',
    },
    images: [
      'https://i.imgur.com/9LFjwpI.jpeg',
      'https://i.imgur.com/vzrTgUR.jpeg',
      'https://i.imgur.com/p5NdI6n.jpeg',
    ],
    creationAt: '2025-08-04T21:37:58.000Z',
    updatedAt: '2025-08-04T21:37:58.000Z',
  },
  {
    id: 9,
    title: 'Classic Navy Blue Baseball Cap',
    slug: 'classic-navy-blue-baseball-cap',
    price: 61,
    description:
      'Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2025-08-04T21:37:58.000Z',
      updatedAt: '2025-08-04T21:37:58.000Z',
    },
    images: [
      'https://i.imgur.com/R3iobJA.jpeg',
      'https://i.imgur.com/Wv2KTsf.jpeg',
      'https://i.imgur.com/76HAxcA.jpeg',
    ],
    creationAt: '2025-08-04T21:37:58.000Z',
    updatedAt: '2025-08-04T21:37:58.000Z',
  },
];
