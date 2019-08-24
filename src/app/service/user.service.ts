import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post('https://userbackendexpress.herokuapp.com' + '/user' , user );
  }
}
