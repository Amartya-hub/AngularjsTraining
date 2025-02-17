export const ProductDetailComponent: angular.IComponentOptions = {
  templateUrl: 'app/components/product-detail/product-detail.template.html',
  controller: ['$routeParams', 'productService', function(this: any, $routeParams, productService) {
    this.product = productService.getProductById(parseInt($routeParams.productId));
  }]
};
