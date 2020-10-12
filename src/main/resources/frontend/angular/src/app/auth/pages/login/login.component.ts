import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.signIn();
  }

  signIn() {
    return this.authService.signIn(this.login, this.password).pipe(first()).subscribe(data => {
      this.authService.setUserName(this.login);
      this.router.navigate(['car/car-list'])

    }, error => {
      console.log(error)
    })
  }
}
