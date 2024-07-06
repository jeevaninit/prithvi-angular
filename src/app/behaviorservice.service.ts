import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorserviceService {
  mydata=new BehaviorSubject("default message");
  mydata1=new Subject()

  constructor() {
    this.mydata.next("Hello am from Subject and Sunject Behavior...")
    this.mydata.next("line two here....")
    this.mydata1.next('Hello am from just Subject method...')
   }





}
