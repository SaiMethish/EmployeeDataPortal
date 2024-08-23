import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-detailscard',
  templateUrl: './detailscard.component.html',
  styleUrls: ['./detailscard.component.scss']
})
export class DetailscardComponent implements OnInit {
  @Input() user:any;
  isAdmin:Boolean=false;
  constructor(private userService:UserService) { }
  ngOnInit(): void {
    let user:any=localStorage.getItem("user");
    if(user==null){
      user='';
    }
    else{
      user=JSON.parse(user);
      this.isAdmin=user.isAdmin;
    }
  }

  deleteUser=()=>{
    this.userService.deleteUser(this.user.id).subscribe({
      next:(res)=>{
        console.log(res);
        window.location.reload();
      },
      error:err=>console.log(err),
      complete:()=>{}
    })
  }

}
