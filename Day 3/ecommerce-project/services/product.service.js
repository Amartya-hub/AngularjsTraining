var productModule = angular.module('productModule');

productModule.service('productService', function ($http) {
    var cart = [];

    this.getProducts = function () {
        return $http.get('https://fakestoreapi.com/products');
    };

    this.addToCart = function (product) {
        cart.push(product);
    };

    this.getCart = function () {
        return cart;
    };
});
