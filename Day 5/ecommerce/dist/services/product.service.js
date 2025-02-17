
var ProductService = /** @class */ (function () {
    function ProductService($http) {
        this.$http = $http;
    }
    // Fetch product data from Fake Store API
    ProductService.prototype.getProducts = function () {
        return this.$http.get('https://fakestoreapi.com/products') // Using Fake Store API
            .then(function (response) { return response.data; })
            .catch(function (error) {
            console.error('Error fetching products:', error);
            throw error;
        });
    };
    // Fetch a single product by ID from Fake Store API
    ProductService.prototype.getProductById = function (productId) {
        return this.$http.get("https://fakestoreapi.com/products/".concat(productId)) // Using Fake Store API
            .then(function (response) { return response.data; })
            .catch(function (error) {
            console.error("Error fetching product with ID ".concat(productId, ":"), error);
            throw error;
        });
    };
    ProductService.$inject = ['$http'];
    return ProductService;
}());

angular.module('app').service('ProductService', ProductService);
