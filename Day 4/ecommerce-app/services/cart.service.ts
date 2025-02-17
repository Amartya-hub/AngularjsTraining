// app/services/cart.service.ts
interface CartItem {
    product: { id: number };
    quantity: number;
}

export class CartService {
    private cartItems: CartItem[] = [];
  
    addProductToCart(product, quantity) {
      const existingItem = this.cartItems.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cartItems.push({ product, quantity });
      }
    }
  
    removeProductFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    }
  
    getCartItems() {
      return this.cartItems;
    }
  
    clearCart() {
      this.cartItems = [];
    }
  }
  