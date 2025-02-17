var AuthService = /** @class */ (function () {
    function AuthService($location) {
        this.$location = $location;
        // Sample users with email and password
        this.authUsers = [
            { email: 'amartya@gmail.com', password: "2345" },
            { email: 'amartyak@gmail.com', password: "123456" },
            { email: 'umang@gmail.com', password: "123456789" },
            { email: 'umangt@gmail.com', password: "123456789" },
        ];
    }
    // Method to handle login
    AuthService.prototype.login = function (username, password) {
        for (var _i = 0, _a = this.authUsers; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.email === username && user.password === password) {
                localStorage.setItem('authToken', 'loggedIn'); // Store auth token
                this.$location.path('/product'); // Redirect to products
                return true;
            }
        }
        return false;
    };
    // Method to check if user is authenticated
    AuthService.prototype.isAuthenticated = function () {
        return !!localStorage.getItem('authToken');
    };
    // Method to log out
    AuthService.prototype.logout = function () {
        localStorage.removeItem('authToken'); // Clear session
        this.$location.path('/auth'); // Redirect to login page
    };
    AuthService.$inject = ['$location'];
    return AuthService;
}());

