import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }
  userList:any=[];
  userdept:string='';
  ngOnInit(): void {
    let user:any=localStorage.getItem("user");
    if(user==null){
      user='';
      this.router.navigate(['/login']);
    }
    else{
      user=JSON.parse(user);
      this.userdept=user.department;
    }
    this.userService.getUserList('/').subscribe({
      next:(res:any)=>{
        this.userList=res.filter((i:any)=>{
          return i.isAdmin===false && i.department===this.userdept;
        });
        console.log("data from dashboard",this.userList)
      },
      error:err=>console.log(err),
      complete:()=>{}
    })
  }

}
