import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  SignUp:FormGroup;

    
  date: Date = new Date();
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MM-yyyy',
      defaultOpen: false,
      closeOnSelect: false
  }

  constructor(private formBuilder:FormBuilder ) 
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

    alert(this.SignUp.controls.name.value);

  }

  

}
