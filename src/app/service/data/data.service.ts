import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private message=new BehaviorSubject("data from ds");
  currentMessage=this.message.asObservable();
  constructor() { }

  updateMessage=(message:string)=>{
    this.message.next(message);
  }
}
