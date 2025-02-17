var productModule = angular.module('productModule', ['authModule']);

productModule.controller('productController', function ($scope, productService) {
    $scope.products = [];

    // Fetch product data from the Fake Store API
    productService.getProducts().then(function (response) {
        $scope.products = response.data;
    });

    $scope.addToCart = function (product) {
        productService.addToCart(product);
    };
});

productModule.controller('cartController', function ($scope, productService) {
    $scope.cart = productService.getCart();
    $scope.getTotal = function () {
        return $scope.cart.reduce(function (total, item) {
            return total + item.price;
        }, 0);
    };
});
