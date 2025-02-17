import angular from 'angular';

import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../src/app/components/auth/login.component';
import { RegisterComponent } from '../src/app/components/auth/register.component';

export const AuthModule = angular.module('authModule', [])
  .component('login', LoginComponent)
  .component('register', RegisterComponent)
  .service('authService', AuthService);
