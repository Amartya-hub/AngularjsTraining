import angular from 'angular';
import { OrderListComponent } from '../src/app/components/order-list/order-list.component';
import { OrderDetailComponent } from '../src/app/components/order-detail/order-detail.component';
import { OrderService } from '../services/order.service';

export const OrderModule = angular.module('orderModule', [])
  .component('orderList', OrderListComponent)
  .component('orderDetail', OrderDetailComponent)
  .service('orderService', OrderService);
