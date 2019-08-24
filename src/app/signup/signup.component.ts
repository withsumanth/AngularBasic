import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  creteUser() {
    this.userService.create(this.model)
      .subscribe(
        data => this.router.navigate(['/'])
      );
  }

}
