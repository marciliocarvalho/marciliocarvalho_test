import { Component, OnInit } from '@angular/core';
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
    email: '',
    firstName: '',
    lastName: '',
    login: '',
    password: '',
    phone: ''
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.insert().subscribe(user => {
      alert('Success!!!')
    }, error => {
      alert(error.error.message);
    })
  }

  insert() {
    return this.userService.insert(this.user);
  }
}
