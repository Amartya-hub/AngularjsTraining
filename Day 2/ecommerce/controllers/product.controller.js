catlogmodule.controller("ProductController", function ($scope) {
    $scope.products = [
        {
            name: "iPhone 15",
            price: 54000,
            processor: "iOS",
            brand: "Apple",
            image: "https://images.apple.com/v/iphone-15/c/images/overview/design/hero/iphone_15__fmvi7brc1r6i_large.jpg"
        },
        {
            name: "Samsung Galaxy S25",
            price: 75000,
            processor: "Snapdragon",
            brand: "Samsung",
            image: "https://images.samsung.com/global/galaxy/main/galaxy-s22-ultra-highlights.jpg"
        },
        {
            name: "Nothing Phone 2a",
            price: 24000,
            processor: "Dimensity",
            brand: "Nothing",
            image: "https://cdn1.smartprix.com/rx-iwe76uuw1-w1200-h1200/we76uuw1.jpg"
        },
        {
            name: "Realme 13 Pro",
            price: 20000,
            processor: "Dimensity",
            brand: "Realme",
            image: "https://fdn2.gsmarena.com/vv/bigpic/realme-13-pro.jpg"
        },
        {
            name: "POCO F7",
            price: 27000,
            processor: "Snapdragon",
            brand: "POCO",
            image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f7.jpg"
        }
    ];
});
