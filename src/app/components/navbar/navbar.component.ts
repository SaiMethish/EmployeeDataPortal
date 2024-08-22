import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  email:string='';
  ngOnInit(): void {
    let user:any=localStorage.getItem("user");
    if(user==null){
      user='';
    }
    else{
      user=JSON.parse(user);
      this.email=user.email;
    }

  }
  logout=()=>{localStorage.removeItem("user"); this.router.navigate(['/login']) }

}
