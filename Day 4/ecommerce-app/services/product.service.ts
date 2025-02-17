// app/services/product.service.ts
export class ProductService {
    private products = [
      { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 100 },
      { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 200 },
      // Add more products as needed
    ];
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id: number) {
      return this.products.find(product => product.id === id);
    }
  }
  