import angular from 'angular';
import { CartComponent } from '../src/app/components/cart/cart.component';
import { CartService } from '../services/cart.service';

export const CartModule = angular.module('cartModule', [])
  .component('cart', CartComponent)
  .service('cartService', CartService);
