import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GuestbookService } from './guestbook/guestbook.service';
import { User } from './guestbook/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user: User = new User();
  title = 'app';

  constructor(
  		private _location: Location,
  		private _route: Router,
  		private _guestbookService: GuestbookService) {}



  ngOnInit() {

  }
}
