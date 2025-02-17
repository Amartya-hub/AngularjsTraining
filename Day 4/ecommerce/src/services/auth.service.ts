import { ILocationService } from 'angular';

export class AuthService {
    static $inject = ['$location'];

    private authUsers: Array<{ email: string; password: string }>;

    constructor(private $location: ILocationService) {
        // Sample users with email and password
        this.authUsers = [
            { email: 'amartya@gmail.com', password: "2345" },
            { email: 'amartyak@gmail.com', password: "123456" },
            { email: 'umang@gmail.com', password: "123456789" },
            { email: 'umangt@gmail.com', password: "123456789" },
        ];
    }

    // Method to handle login
    login(username: string, password: string): boolean {
        for (let user of this.authUsers) {
            if (user.email === username && user.password === password) {
                localStorage.setItem('authToken', 'loggedIn'); // Store auth token
                this.$location.path('/product'); // Redirect to products
                return true;
            }
        }
        return false;
    }

    // Method to check if user is authenticated
    isAuthenticated(): boolean {
        return !!localStorage.getItem('authToken');
    }

    // Method to log out
    logout(): void {
        localStorage.removeItem('authToken'); // Clear session
        this.$location.path('/auth'); // Redirect to login page
    }
}


