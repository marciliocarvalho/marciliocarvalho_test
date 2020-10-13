import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/util/endpoints';
import { User } from 'src/app/util/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  findAll() {
    return this.http.get<User[]>(Endpoints.USER_FIND_ALL);
  }

  delete(id: number) {
    return this.http.delete<void>(Endpoints.USER_DELETE + id);
  }

  insert(user: User) {
    return this.http.post<User>(Endpoints.USER_INSERT, user);
  }

  edit(user: User) {
    return this.http.put<User>(Endpoints.USER_EDIT + user.id, user);
  }

  findById(id: number) {
    return this.http.get<User>(Endpoints.USER_FIND_BY_ID + id);
  }

  me() {
    return this.http.get<User>(Endpoints.ME);
  }
}
