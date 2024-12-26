import { Component, ViewChild } from '@angular/core';
import {ViewchildComponent} from './viewchild/viewchild.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter=10;

  updatecounter(){
    this.counter+1;
  }


message:string='Hello am from parent data... '

pd=''
  persondata:any=[
    "Jeevan",
    "Dilsukhnagar",
    "Hyderabd",
    "83489439843"
  ]
  course:any={
    cname:'Angular',
    duration:'1 Month',
    fee:10000

  }
  a:number=10;
  b:number=30;

  addpersondata(){
    /* this.addpersondata.push(this.pd); */
    this.pd=''
  }
imagepath='assets/banner.png';

isDisabled = false;

}

