import { TestUser } from './testUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  url = '/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
