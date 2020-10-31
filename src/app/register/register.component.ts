import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm:FormGroup;

  constructor(private fb:FormBuilder) {
    
    this.myForm=this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      phone:[""],
      email:["", Validators.required],
      password:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
   }
   register(){
    console.log(this.myForm.value);
   }

  ngOnInit(): void {
  }

}
