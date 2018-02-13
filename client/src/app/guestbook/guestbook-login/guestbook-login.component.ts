import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GuestbookService } from '../guestbook.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guestbook-login',
  templateUrl: './guestbook-login.component.html',
  styleUrls: ['./guestbook-login.component.css', '../../../assets/stylesheets/bootstrap.min.css']
})
export class GuestbookLoginComponent implements OnInit {
	user: User = new User();
  errors = [];

  constructor(
    private _route: Router,
    private _guestbookService: GuestbookService) {
  	}

  ngOnInit() {
  }

  onSubmit() {
    this.errors = [];
    // console.log('got here');
    this._guestbookService.logUser(this.user,
      (user) => {
        // console.log(user)
        //Navigate to dashboard
        this._route.navigateByUrl('/guestbook/show');
      },
      (err) => {
        // Display Errors
        this.errors.push(err)
        console.log(err)
        this._route.navigateByUrl('/guestbook/login');


    });
  }

  
}
