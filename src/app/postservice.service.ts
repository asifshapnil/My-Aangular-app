import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor() { }

  display() {
    return 'hello';
  }
}
