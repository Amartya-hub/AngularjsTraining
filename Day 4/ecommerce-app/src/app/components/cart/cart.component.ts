export const CartComponent: angular.IComponentOptions = {
    templateUrl: 'app/components/cart/cart.template.html',
    controller: ['cartService', function(this: { cartItems: any[] }, cartService) {
          this.cartItems = cartService.getCartItems();
        }]
  };
  