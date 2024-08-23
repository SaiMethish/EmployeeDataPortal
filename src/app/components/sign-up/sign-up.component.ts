import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!:FormGroup;
  constructor(private fb:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      name:['',Validators.required],
      age:['',Validators.required],
      mobileNumber:['',Validators.required],
      department:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  
  }

  submitForm=()=>{
    if(!this.signupForm.valid) {console.log("enter details");}
    else{
      let user:User={
        name:this.signupForm.get("name")?.value,
        age:parseInt(this.signupForm.get("age")?.value),
        mobileNumber:parseInt(this.signupForm.get("mobileNumber")?.value),
        department:this.signupForm.get("department")?.value,
        isAdmin:false,
        email:this.signupForm.get("email")?.value,
        password:this.signupForm.get("password")?.value
      };
      this.userService.signUp('/',user).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.router.navigate(['/login']);
        },
        error:err=>console.log(err),
        complete:()=>{}
      })
    }

  }
}
