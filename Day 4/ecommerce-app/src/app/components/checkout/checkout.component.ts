export const CheckoutComponent: angular.IComponentOptions = {
    templateUrl: 'app/components/checkout/checkout.template.html',
    controller: ['orderService', function(this: { order: any; placeOrder: () => void }, orderService) {
      this.order = {};
  
      this.placeOrder = () => {
        orderService.placeOrder(this.order);
      };
    }]
  };
  