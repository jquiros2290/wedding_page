import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class GuestbookService {
  currentUser: User;

  constructor(private _http: Http) { }

  createUser(user, callback, errorback) {
  	this._http.post('/users', user).subscribe(
  		(res) => {
  			const user = res.json();
  			console.log(user);
  			this.currentUser = user;
  			callback(this.currentUser);
  		},
  		(err) => {
  			errorback(err);
  		})
  }

  logUser(user, callback, errorback) {
    console.log(user)
  	this._http.post('/sessions', user).subscribe(
  		(res) => {
  			const user = res.json();
  			console.log(user);
  			this.currentUser = user;
  			callback(this.currentUser);
  		},
  		(err) => {
        let error = err.json();
  			errorback(error);
  		})
  }

  getCurrentUser(callback, errorback) {
    this._http.get('/sessions').subscribe(
      (res) => {
        const user = res.json();

        if (user) {
          this.currentUser = user;
        }

        callback(this.currentUser );

      },
      (err) => {
        errorback(err);
      }
    );
  }

  logout(callback, errorback) {
  	this._http.delete('/sessions').subscribe(
  		(res) => {
  			this.currentUser = null;
  			callback(res.json());

  		},
  		(err) => {
  			errorback(err);
  		}
  	);
  }

}
