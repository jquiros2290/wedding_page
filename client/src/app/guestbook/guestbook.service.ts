import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Post } from './post';
import { Router } from '@angular/router';


@Injectable()
export class GuestbookService {
  currentUser: User;
  posts: Post[];

  constructor(
    private _http: Http,
    private _route: Router) {
    this.posts = [];
  }

  createUser(user, callback, errorback) {
  	this._http.post('/users', user).subscribe(
  		(res) => {
  			const user = res.json();
  			this.currentUser = user;
  			callback(this.currentUser);
  		},
  		(err) => {
        let error = err.json();
  			errorback(error);
  		})
  }

  logUser(user, callback, errorback) {
  	this._http.post('/sessions', user).subscribe(
  		(res) => {
  			const user = res.json();
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
          callback(this.currentUser );
        }
        else{
          this._route.navigateByUrl('/guestbook/register');
        }
      },
      (err) => {
        errorback(err);
      }
    );
  }

  createPost(post, callback, errorback) {
    this._http.post('/posts', post).subscribe(
      (res) => {
        const post = res.json();
        this.posts.push(post);

        callback(post);
      },
      (err) => {
        errorback(err.json());
      }
    ); 
  }

  retrievePosts(callback, errorback){
    this._http.get('/posts').subscribe(
      (res) => { 
        const posts = res.json();
        this.posts = posts;

        callback(posts);
      },
      (err) => {
        errorback(err.json());
      }
    );
  }

  deletePost(id, callback, errorback){
    this._http.delete('/posts/' + id).subscribe(
      (res) => { 
        const post = res.json();
        callback(post);
      },
      (err) => {
        errorback(err.json());
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
