import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  login = () => {
    if (!this.loginForm.valid) console.log("enter valid details");
    else {
      console.log(this.loginForm.value);
      this.userService.login('/').subscribe({
        next: (res: any) => {
          res.forEach((i: any) => {
            if (i.email === this.loginForm.get('email')?.value && i.password === this.loginForm.get("password")?.value) {
              console.log(i);
              localStorage.setItem("user", JSON.stringify(i));
              if (i.isAdmin === false) this.router.navigate(['/dashboard']);
              else this.router.navigate(['/admin']);

            }
          })
        },
        error: (err) => console.log(err),
        complete: () => { }
      })
    }

  }

}
