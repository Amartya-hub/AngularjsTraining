export var ProductDetailComponent = {
    templateUrl: 'app/components/product-detail/product-detail.template.html',
    controller: ['$routeParams', 'productService', function ($routeParams, productService) {
            this.product = productService.getProductById(parseInt($routeParams.productId));
        }]
};
