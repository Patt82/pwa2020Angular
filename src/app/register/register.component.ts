import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService) {

    this.myForm = this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      phone: [""],
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  register() {
    console.log(this.myForm.value);
    this.usersService.create(this.myForm.value)
    .subscribe(data=>{
      console.log("Data", data);
    },
    err=>{
      console.log("Err",err);
    })
  }

  ngOnInit(): void {
  } 

}
