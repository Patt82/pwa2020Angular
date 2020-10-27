import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.myForm = this.fb.group({
      email: ["",[Validators.required, Validators.minLength(3)]],
      password: ["",[Validators.required]]
    })
  } 
  
  login(){
    console.log(this.myForm.value);
  }
  ngOnInit(): void {
  }

}
