var authModule = angular.module('authModule', []);

authModule.controller('loginController', function ($scope, $location) {
    $scope.user = {};
    $scope.loginMessage = '';

    $scope.onLogin = function () {
        if ($scope.user.email === 'test@example.com' && $scope.user.password === 'password') {
            $scope.loginMessage = 'Login Successful!';
            $location.path('/products');
        } else {
            $scope.loginMessage = 'Invalid credentials!';
        }
    };
});
