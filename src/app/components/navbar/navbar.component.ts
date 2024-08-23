import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private dataService:DataService) { }
  email:string='';
  searchQuery:string='';
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
  search=()=>{
    console.log(this.searchQuery);
    this.dataService.updateMessage(this.searchQuery);
  }
}
