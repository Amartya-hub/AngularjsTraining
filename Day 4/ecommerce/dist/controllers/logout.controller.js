var LogoutController = /** @class */ (function () {
    function LogoutController($scope, $window, $location) {
        this.$scope = $scope;
        this.$window = $window;
        this.$location = $location;
        this.init();
    }
    // Initialize necessary data
    LogoutController.prototype.init = function () {
        this.$scope.logout = this.logout.bind(this); // Make sure logout is properly set
    };
    LogoutController.prototype.logout = function () {
        if (window.confirm('Are you sure you want to log out?')) {
            this.$window.localStorage.removeItem('authToken'); // or sessionStorage.clear();
            this.$location.path('/auth');
        }
    };
    LogoutController.$inject = ['$scope', '$window', '$location'];
    return LogoutController;
}());

