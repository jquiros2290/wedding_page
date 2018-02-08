import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GuestbookService } from './guestbook/guestbook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
  		private _location: Location,
  		private _route: Router,
  		private _guestbookService: GuestbookService) {}



  ngOnInit() {
  // 	this._guestbookService.getCurrentUser(
  // 		(user) => {
  // 			if (!user) {
  // 				this._route.navigateByUrl('/');

  //         return
  // 			}

  //       this._location.back()

  // 		},
  // 		console.log
  // 	);
  }
}
