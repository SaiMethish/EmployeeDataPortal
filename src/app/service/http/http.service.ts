import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }
  baseUrl='http://localhost:3000'
  postService=(url:any,data:any)=>{
    return this.httpClient.post(this.baseUrl+url,data);
  }
  
  getService=(url:any)=>{
    return this.httpClient.get(this.baseUrl+url);
  }

  deleteService=(url:any)=>{
    return this.httpClient.delete(this.baseUrl+url);
  }
}
