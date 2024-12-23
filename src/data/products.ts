import { Product } from './types';
import { productData, validateProductData } from './productData';

if (!validateProductData(productData)) {
  console.error('Invalid product data structure detected');
}

export const products: Product[] = productData;
export type { Product };