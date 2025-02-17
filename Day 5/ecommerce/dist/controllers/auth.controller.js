var AuthController = /** @class */ (function () {
    function AuthController(authService) {
        this.authService = authService;
        this.username = '';
        this.password = '';
        this.message = '';
    }
    AuthController.prototype.login = function () {
        if (this.authService.login(this.username, this.password)) {
            this.message = 'Login Successful';
        }
        else {
            this.message = 'Invalid credentials';
        }
    };
    AuthController.$inject = ['AuthService'];
    return AuthController;
}());

