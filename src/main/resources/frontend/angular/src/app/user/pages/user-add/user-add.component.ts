import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/util/model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = {
    birthday: null,
    email: null,
    firstName: null,
    lastName: null,
    login: null,
    password: null,
    phone: null,
    cars: null
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.insert().subscribe(user => {
      alert('Success!!!');
      this.router.navigate(['']);
    }, error => {
      alert(error.error.message);
    })
  }

  insert() {
    return this.userService.insert(this.user);
  }
}
