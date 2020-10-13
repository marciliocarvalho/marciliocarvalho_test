import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/util/model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.populate(id);
  }

  populate(id: number) {
    this.userService.findById(id).subscribe(user => {
      this.user = user;
    });
  }

  onSubmit() {
    this.userService.edit(this.user).subscribe(x => {
      alert('Success!');
      this.router.navigate(['']);
    }, error => {
      alert(error.error.message);
    })
  }

}
