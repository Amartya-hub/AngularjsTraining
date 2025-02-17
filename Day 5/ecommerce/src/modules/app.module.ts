import  * as angular from "angular"
import 'angular-route';  

import { ProductController } from "../controllers/product.controller";
import { AuthController } from "../controllers/auth.controller";
import { ShoppingCartController } from "../controllers/shopingcart.controller";
import logoutController from "../controllers/logout.controller";
import { AuthService } from "../services/auth.service";

const appModule = angular.module('ecommerce', ['ngRoute']);

appModule.config(['$routeProvider', ($routeProvider:any) => {
    $routeProvider
      .when('/auth', {
        templateUrl: 'views/login.html',  // Template for the home route
        controller: 'AuthController',  // Controller for the home route
        controllerAs: 'AuthCtrl'  // Use 'homeCtrl' as alias for the controller instance
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',  // Template for the home route
        controller: 'AuthController',  // Controller for the home route
        controllerAs: 'AuthCtrl'  // Use 'homeCtrl' as alias for the controller instance
      })
      .when('/product', {
        templateUrl: 'views/catalogs.html',  // Template for the about route
        controller: 'ProductController',  // Controller for the about route
        controllerAs: 'ProductCtrl'  // Use 'aboutCtrl' as alias for the controller instance
      })  
      .when('/product/:productId', {
        templateUrl: 'views/details.html',
        controller: 'ProductController'
      })        
      .when('/cart', {
        templateUrl: 'views/cart.html',  // Template for the about route
        controller: 'ShoppingCartController',  // Controller for the about route
        controllerAs: 'CartCtrl'  // Use 'aboutCtrl' as alias for the controller instance
      }) 
      .when('/logout', {
        templateUrl: 'views/logout.html',  // Template for the about route
        controller: 'logoutController',  // Controller for the about route
        controllerAs: 'ctrl'  // Use 'aboutCtrl' as alias for the controller instance
        
      }) 
      
      .otherwise({
        redirectTo: 'product'  // Default route is home
      });
  }]);


appModule.controller('ProductController',ProductController);
appModule.controller('AuthController',AuthController);
appModule.service('AuthService', AuthService);
appModule.controller('ShoppingCartController',ShoppingCartController);
appModule.controller('logoutController',logoutController);
