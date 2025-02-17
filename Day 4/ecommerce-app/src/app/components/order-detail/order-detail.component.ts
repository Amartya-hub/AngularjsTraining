export const OrderDetailComponent: angular.IComponentOptions = {
    templateUrl: 'app/components/order/order-detail.template.html',
    controller: ['$routeParams', 'orderService', function(this: any, $routeParams, orderService) {
      this.order = orderService.getOrderById(parseInt($routeParams.orderId));
    }]
  };
  