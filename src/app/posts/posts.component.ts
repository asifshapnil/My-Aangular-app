import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostserviceService]
})
export class PostsComponent implements OnInit {

  posts: any[];
  // tslint:disable-next-line: variable-name
  constructor( private _service: PostserviceService) {

  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.posts = this._service.myPosts();
  }
  

}
