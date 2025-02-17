export const OrderListComponent: angular.IComponentOptions = {
    templateUrl: 'app/components/order/order-list.template.html',
    controller: ['orderService', function(this: any, orderService) {
          this.orders = orderService.getOrders();
        }]
  };
  