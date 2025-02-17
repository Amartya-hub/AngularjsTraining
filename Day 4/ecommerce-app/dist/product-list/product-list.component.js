export var ProductListComponent = {
    templateUrl: 'app/components/product-list/product-list.template.html',
    controller: ['productService', function (productService) {
            this.products = productService.getProducts();
        }]
};
