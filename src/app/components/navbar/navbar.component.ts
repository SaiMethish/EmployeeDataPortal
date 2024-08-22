import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
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

}
