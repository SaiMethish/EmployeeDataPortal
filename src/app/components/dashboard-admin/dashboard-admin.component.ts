import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {
  
  constructor(private userService:UserService, private router:Router, private dataService:DataService) { }
  userList:any=[];
  searchQuery:any;
  isAdmin:string='';
  ngOnInit(): void {
    let user:any=localStorage.getItem("user");
    if(user==null){
      user='';
      this.router.navigate(['/login'])
    }
    else{
      user=JSON.parse(user);
    }
    if(user.isAdmin===false) this.router.navigate(['/dashboard']);
    this.userService.getUserList('/').subscribe({
      next:(res:any)=>{
        this.userList=res.filter((i:any)=>i.isAdmin===false);
      },
      error:err=>console.log(err),
      complete:()=>{}
    })
    this.dataService.currentMessage.subscribe((message)=>this.searchQuery=message);
  }

}
