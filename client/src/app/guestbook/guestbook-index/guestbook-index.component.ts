import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { GuestbookService } from '../guestbook.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guestbook-index',
  templateUrl: './guestbook-index.component.html',
  styleUrls: ['./guestbook-index.component.css', '../../../assets/stylesheets/bootstrap.min.css']
})
export class GuestbookIndexComponent implements OnInit {
  posts: Post[];
  post: Post = new Post();

  user: User = new User();
  constructor(
    private _route: Router,
    private _guestbookService: GuestbookService) {
    this._guestbookService.retrievePosts(
        (posts) => {
          this.posts = posts;
          // console.log('here are the posts', this.posts)
        },
        (err) => {
          console.log(err)
        }
      );

    this._guestbookService.getCurrentUser(
        (user) => {
          this.user = user;
          // console.log(this.user)
        },
        (err) => {
          console.log(err)
        }
      );
    }

  ngOnInit() {
  }

  onSubmit(){
  	this._guestbookService.createPost(this.post,
  		(post) => {

        this._guestbookService.retrievePosts(
          (posts) => {
            this.posts = posts;
            this.post = new Post();
            // console.log('here are the posts', this.posts)
          },
          (err) => {
            console.log(err)
          });
  			console.log(post)
  		}, 
  		(err) => {
  			console.log(err)
  		});
   }

   delete(id){
     this._guestbookService.deletePost(id,
       (post) => {

          this._guestbookService.retrievePosts(
            (posts) => {
              this.posts = posts;
              // console.log('here are the posts', this.posts)
            },
            (err) => {
              console.log(err)
            });
       },
       (err) => {
         console.log(err)
       });  
   }

   logout(){
    this._guestbookService.logout(
      (user) => {
        this.user = new User();
        this._route.navigateByUrl('/');
      },
      (err) => {
        this._route.navigateByUrl('/');
      }
    );
  }

}
