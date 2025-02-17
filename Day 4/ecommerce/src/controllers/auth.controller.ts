import { IController } from 'angular';
import { AuthService } from '../services/auth.service';

export class AuthController implements IController {
    static $inject = ['AuthService'];

    public username: string;
    public password: string;
    public message: string;

    constructor(private authService: AuthService) {
        this.username = '';
        this.password = '';
        this.message = '';
    }

    public login(): void {
        if (this.authService.login(this.username, this.password)) {
            this.message = 'Login Successful';
        } else {
            this.message = 'Invalid credentials';
        }
    }
}


