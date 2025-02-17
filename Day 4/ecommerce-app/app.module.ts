import angular from 'angular';
import 'angular-route';
import * as ngRoute from 'angular-route';

import { ProductModule } from './modules/product.module';
import { CartModule } from './modules/cart.module';
import { AuthModule } from './modules/auth.module';
import { OrderModule } from './modules/order.module';

export const AppModule = angular.module('app', [
  'ngRoute',
  ProductModule.name,
  CartModule.name,
  AuthModule.name,
  OrderModule.name
])
.config(['$routeProvider', ($routeProvider: ngRoute.IRouteProvider) => {
  $routeProvider
    .when('/products', {
      template: '<product-list></product-list>'
    })
    .when('/products/:productId', {
      template: '<product-detail></product-detail>'
    })
    .when('/cart', {
      template: '<cart></cart>'
    })
    .when('/checkout', {
      template: '<checkout></checkout>'
    })
    .when('/login', {
      template: '<login></login>'
    })
    .when('/register', {
      template: '<register></register>'
    })
    .when('/orders', {
      template: '<order-list></order-list>'
    })
    .when('/orders/:orderId', {
      template: '<order-detail></order-detail>'
    })
    .otherwise({
      redirectTo: '/products'
    });
}]);
