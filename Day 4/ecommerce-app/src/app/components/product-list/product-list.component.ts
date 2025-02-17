export const ProductListComponent: angular.IComponentOptions = {
  templateUrl: 'app/components/product-list/product-list.template.html',
  controller: ['productService', function(this: any, productService) {
    this.products = productService.getProducts();
  }]
};
