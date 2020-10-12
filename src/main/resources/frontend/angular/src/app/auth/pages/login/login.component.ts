import { Component, OnInit } from '@angular/core';
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
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.signIn();
  }

  signIn() {
    return this.authService.signIn(this.login, this.password).subscribe(x => {
      localStorage.set('token', x);
    }, error => {
      alert(error.error.message);
    })
  }
}
