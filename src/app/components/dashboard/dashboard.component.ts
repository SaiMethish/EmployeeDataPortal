import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private dataService:DataService) { }
  userList:any=[];
  userdept:string='';
  searchQuery:any;
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
    });
    this.dataService.currentMessage.subscribe((message)=>{
      console.log(message);
      this.searchQuery=message;
    })
  }
}
