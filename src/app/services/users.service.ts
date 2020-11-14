import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  routes:string = "users/"
  constructor(private http:HttpClient) { }

  create(data){
    return this.http.post(environment.endpointApi+this.routes+"web/register", data);
  }
  login(data){
    return this.http.post(environment.endpointApi+this.routes+"web/login", data)
  }

}
