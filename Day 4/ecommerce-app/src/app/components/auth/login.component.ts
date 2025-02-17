export const LoginComponent: angular.IComponentOptions = {
    templateUrl: 'app/components/auth/login.template.html',
    controller: ['authService', function(this: { credentials: any; login: () => void }, authService) {
      this.credentials = {};
  
      this.login = () => {
        if (authService.login(this.credentials)) {
          alert('Login successful!');
        } else {
          alert('Invalid credentials.');
        }
      };
    }]
  };
  