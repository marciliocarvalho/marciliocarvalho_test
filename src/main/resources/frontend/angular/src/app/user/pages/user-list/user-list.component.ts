import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/util/model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.populateUsers();
  }

  delete(id: number) {
    this.userService.delete(id).subscribe(() => {
      alert('User deleted');
      this.populateUsers();
    }, error => {
      alert(error.error.message);
    })
  }

  populateUsers() {
    this.userService.findAll().subscribe(x => {
      this.users = x;
    });
  }

}
