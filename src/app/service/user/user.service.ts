import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl='/users'
  constructor(private httpService:HttpService) { }

  signUp=(url:any,data:any)=>{
    return this.httpService.postService(this.baseurl+url,data);
  }

  login=(url:any)=>{
    return this.httpService.getService(this.baseurl+url);
  }
}
