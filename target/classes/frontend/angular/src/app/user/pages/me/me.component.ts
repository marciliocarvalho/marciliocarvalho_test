import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/util/model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.me();
  }

  me() {
    return this.userService.me().subscribe(user => {
      this.user = user;
    });
  }
}
