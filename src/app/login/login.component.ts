import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from "../interfaces/Users"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router, private _snackBar: MatSnackBar) {
    this.myForm = this.fb.group({
      email: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required]]
    })
  }

  login() {
    console.log(this.myForm.value);
    this.usersService.login(this.myForm.value)
      .subscribe((data:Login) => {
        console.log("Success", data)
        if(data.token){
          //Persistir el token en local storage
          localStorage.setItem("token", data.token);
          this._snackBar.open("Welcome", null, {
            duration: 2000,
          });
          this.router.navigateByUrl("/"); //Método de Router que funciona como redirect
        }else{
          this._snackBar.open(data.message, null, {
            duration: 2000,
            panelClass: ["error"]
          });
        }
      },
        err => {
          console.log("Err", err)
        })
  }
  ngOnInit(): void {
  }

}
