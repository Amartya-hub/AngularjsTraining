// app/services/auth.service.ts
export class AuthService {
    private users = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' }
    ];
  
    login(credentials) {
      const user = this.users.find(user => user.username === credentials.username && user.password === credentials.password);
      return user !== undefined;
    }
  
    register(newUser) {
      this.users.push(newUser);
    }
  }
  