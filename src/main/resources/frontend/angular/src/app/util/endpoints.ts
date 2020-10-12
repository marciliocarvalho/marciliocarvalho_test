import { environment } from './../../environments/environment';

let api;

if (environment.production) {
  api = '/api/';
}
else {
  api = 'http://localhost:8080/api/';
}

export class Endpoints {
  public static USER_FIND_ALL = api + 'users/';
  public static USER_DELETE = api + 'users/';
  public static USER_INSERT = api + 'users/';

  public static SIGN_IN = api + 'signin/';
}
