// app/services/order.service.ts
export class OrderService {
    private orders: { id: number; [key: string]: any }[] = [];
  
    placeOrder(order: { id: number; [key: string]: any }) {
      this.orders.push(order);
    }
  
    getOrders() {
      return this.orders;
    }
  
    getOrderById(orderId) {
      return this.orders.find(order => order.id === orderId);
    }
  }
  