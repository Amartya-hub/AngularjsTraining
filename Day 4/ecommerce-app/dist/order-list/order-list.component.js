export var OrderListComponent = {
    templateUrl: 'app/components/order/order-list.template.html',
    controller: ['orderService', function (orderService) {
            this.orders = orderService.getOrders();
        }]
};
