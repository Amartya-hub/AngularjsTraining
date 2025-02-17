export var CartComponent = {
    templateUrl: 'app/components/cart/cart.template.html',
    controller: ['cartService', function (cartService) {
            this.cartItems = cartService.getCartItems();
        }]
};
