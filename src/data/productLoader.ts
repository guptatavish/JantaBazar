import { Product } from './types';

export async function loadProducts(): Promise<Product[]> {
  // This function would load your product data from a JSON file or API
  const products: Product[] = [];
  
  // Example of how to structure your data loading
  // You can replace this with your actual data loading logic
  for (let i = 1; i <= 300; i++) {
    const id = String(10000 + i).padStart(5, '0');
    products.push({
      id,
      category: determineCategory(i),
      image: `https://your-image-hosting-url/image${id}.jpg` // Replace with your image URLs
    });
  }
  
  return products;
}

function determineCategory(index: number): string {
  // Add your category logic here
  const categories = ['Electronics', 'Clothing', 'Home', 'Accessories'];
  return categories[index % categories.length];
}