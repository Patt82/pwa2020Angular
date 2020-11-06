import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.myForm = this.fb.group({
      email: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required]]
    })
  }

  login() {
    console.log(this.myForm.value);
    this.usersService.login(this.myForm.value)
      .subscribe(data => {
        console.log("Success", data)
        if(data["token"]){
          alert("Login successful");
          //Persistir el token en local storage
          localStorage.setItem("token", data["token"]);
        }else{
          alert(data["message"])
        }
      },
        err => {
          console.log("Err", err)
        })
  }
  ngOnInit(): void {
  }

}
