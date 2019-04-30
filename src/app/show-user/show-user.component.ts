import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  id: any;
  user:any;

  SignUp:FormGroup;

    
  date: Date = new Date();
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MM-yyyy',
      defaultOpen: false,
      closeOnSelect: false
  }

  constructor(private route: ActivatedRoute, private _service: UserserviceService, private formBuilder:FormBuilder)
   {
      this.SignUp = formBuilder.group({

        name: ['', Validators.required],
        username:[''],
        email:[''],
        street:[''],
        suite:[''],
        city:[''],
        zipcode:[''],
        lat:[''],
        lng:[''],
        date:['']


      });
    }

   disabled = false;
   ShowFilter = false;
   limitSelecton = false;

   cities: any = [];

   selectedItems: any = [];
   dropdownSettings: any = {};

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.cities = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    
    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    // alert(this.id);
    this.getBooks();
  }

  getBooks(){
    this._service.singleUser(this.id).subscribe(usersList=>this.user=usersList);
  }

  onItemSelect(item: any) {
    this.selectedItems.push(item);
  }
  onSelectAll(items: any) {
    this.selectedItems.push(items);    
  }
  onItemDeSelect(item: any){
    console.log(item);
    this.selectedItems.splice(item, 1);
  }
  PostData(){
      this._service.updateUser(this.SignUp, this.id).subscribe();
  }

}
