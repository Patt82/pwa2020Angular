import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  create(data){
    return this.http.post("http://localhost:3000/users/web/register", data);
  }
  login(data){
    return this.http.post("http://localhost:3000/users/web/login", data)
  }

}
