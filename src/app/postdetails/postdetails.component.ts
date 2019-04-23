import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostserviceService } from '../postservice.service';


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css'],
  providers: [PostserviceService]
})
export class PostdetailsComponent implements OnInit {

  id: any;
  post:any;
  posts: any[];

  constructor(private route: ActivatedRoute, private _service: PostserviceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // alert(this.id);
    this.posts = this._service.myPosts();
    this.getDimensionsByFilter(this.id);
  }

  getDimensionsByFilter(id){
    this.post = this.posts.filter((currentValue) => {
       return currentValue.id == this.id;
    });
    console.log(this.post);
  }

}
