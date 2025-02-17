import angular from 'angular';
import { ProductListComponent } from '../src/app/components/product-list/product-list.component';
import { ProductDetailComponent } from '../src/app/components/product-detail/product-detail.component';
import { ProductService } from '../services/product.service';

export const ProductModule = angular.module('productModule', [])
  .component('productList', ProductListComponent)
  .component('productDetail', ProductDetailComponent)
  .service('productService', ProductService);
