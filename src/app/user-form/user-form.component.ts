import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
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

  constructor() { }

  ngOnInit() {
  }

}
