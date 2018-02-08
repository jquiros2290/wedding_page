import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GuestbookService } from '../guestbook.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guestbook-register',
  templateUrl: './guestbook-register.component.html',
  styleUrls: ['./guestbook-register.component.css', '../../../assets/stylesheets/bootstrap.min.css']
})
export class GuestbookRegisterComponent implements OnInit {
	user: User;
  errors: any;

  constructor(
    private _route: Router,
    private _guestbookService: GuestbookService) {
  	this.user = new User();
  	}

  ngOnInit() {
  }

  onCreate() {
    console.log('got here');
    this._guestbookService.createUser(this.user,
      (user) => {
        console.log(user)
        //Navigate to dashboard
        // console.log('check this out', user)
        this._route.navigateByUrl('/guestbook/show');
      },
      (err) => {
        // Display Errors
        this.errors = err
        console.log(err)

    });
  }
}
