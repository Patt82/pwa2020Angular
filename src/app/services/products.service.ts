import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(environment.endpointApi+"products", {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })

  }
  
  getById(id:string){
    return this.http.get(environment.endpointApi+"products/"+id, {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    })
  }

}
