import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-guestbook-login',
  templateUrl: './guestbook-login.component.html',
  styleUrls: ['./guestbook-login.component.css', '../../../assets/stylesheets/bootstrap.min.css']
})
export class GuestbookLoginComponent implements OnInit {
	user: User;
  constructor() {
  	this.user = new User();
  	}

  ngOnInit() {
  }

  onSubmit(){
  	
  }

}
