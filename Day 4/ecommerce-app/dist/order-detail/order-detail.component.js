export var OrderDetailComponent = {
    templateUrl: 'app/components/order/order-detail.template.html',
    controller: ['$routeParams', 'orderService', function ($routeParams, orderService) {
            this.order = orderService.getOrderById(parseInt($routeParams.orderId));
        }]
};
