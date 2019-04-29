import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserserviceService]
})
export class UserFormComponent implements OnInit {

  hello: string = '';

  user: {} = {
    id:'',
    name:'',
    username:'',
    email:'',
    address: {
      street:'',
      suite:'',
      city:'',
      zipcode:'',
      geo:{
        lat:'',
        lng:''
      }
    }
  }



  constructor(private _service: UserserviceService) { }

  ngOnInit() {
  }

  addData(){
    this._service.users.push(this.user);
  }

}
