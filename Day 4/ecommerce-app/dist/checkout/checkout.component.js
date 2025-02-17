export var CheckoutComponent = {
    templateUrl: 'app/components/checkout/checkout.template.html',
    controller: ['orderService', function (orderService) {
            var _this = this;
            this.order = {};
            this.placeOrder = function () {
                orderService.placeOrder(_this.order);
            };
        }]
};
