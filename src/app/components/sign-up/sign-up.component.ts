import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      name:[''],
      age:[''],
      role:[''],
      mobileNumber:[''],
      department:['']
    })
  
  }

  submitForm=()=>{
    console.log(this.signupForm.value);
  }
}
