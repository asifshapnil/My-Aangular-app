import { TestUser } from './../testUser';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { format } from 'path';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserserviceService]

})
export class UsersComponent implements OnInit {

  users: any[];
  constructor(private _service: UserserviceService) { }

  ngOnInit() {
    // this.users = this._service.users;
    this.getBooks();
  }

  getBooks(){
    this._service.getUsers().subscribe(users=>this.users=users);
  }

}
