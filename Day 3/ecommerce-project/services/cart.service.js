var productModule = angular.module('productModule');

productModule.service('cartService', function () {
    var cart = [];

    this.addToCart = function (product) {
        cart.push(product);
    };

    this.getCart = function () {
        return cart;
    };

    this.getTotal = function () {
        return cart.reduce(function (total, item) {
            return total + item.price;
        }, 0);
    };
});
