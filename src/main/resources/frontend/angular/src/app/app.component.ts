import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/user']);
  }

  users() {
    this.router.navigate(['/user']);
  }

  get isLogged() {
    return this.authService.currentUserValue ? true : false;
  }

  get username() {
    return this.authService.getUserName();
  }
}
