import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GuestbookService } from '../guestbook.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-guestbook-register',
  templateUrl: './guestbook-register.component.html',
  styleUrls: ['./guestbook-register.component.css', '../../../assets/stylesheets/bootstrap.min.css']
})
export class GuestbookRegisterComponent implements OnInit {
	user: User = new User();
  errors: any;

  constructor(
    private _location: Location,
    private _route: Router,
    private _guestbookService: GuestbookService) {
  	}

  ngOnInit() {
    this._guestbookService.getCurrentUser(
      (user) => {
        if (user) {
          this._route.navigateByUrl('/guestbook/show');
          return;
        }
      },
      console.log()
    );
  }

  onCreate() {
    this._guestbookService.createUser(this.user,
      (user) => {
        this._route.navigateByUrl('/guestbook/show');
      },
      (err) => {
        // Display Errors
        this.errors = [err];
        console.log(this.errors, 'these errors are from the component');

    });
  }
}
