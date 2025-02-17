export var LoginComponent = {
    templateUrl: 'app/components/auth/login.template.html',
    controller: ['authService', function (authService) {
            var _this = this;
            this.credentials = {};
            this.login = function () {
                if (authService.login(_this.credentials)) {
                    alert('Login successful!');
                }
                else {
                    alert('Invalid credentials.');
                }
            };
        }]
};
