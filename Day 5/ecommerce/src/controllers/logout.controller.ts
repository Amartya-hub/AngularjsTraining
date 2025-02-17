import { IController, IScope } from 'angular';

// Define a TypeScript interface for the scope
interface ILogoutScope extends IScope {
    logout: () => void;
}

class LogoutController implements IController {
    static $inject = ['$scope', '$window', '$location'];

    constructor(private $scope: ILogoutScope, private $window: ng.IWindowService, private $location: ng.ILocationService) {
        this.init();
    }

    // Initialize necessary data
    private init(): void {
        this.$scope.logout = this.logout.bind(this);  // Make sure logout is properly set
    }

    private logout(): void {
        if (window.confirm('Are you sure you want to log out?')) {
            this.$window.localStorage.removeItem('authToken'); // or sessionStorage.clear();
            this.$location.path('/auth');
        }
}
}
export default LogoutController;
