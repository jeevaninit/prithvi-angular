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


message:any='Hello am from parent data... '

pd=''
  persondata=[
    "Jeevan",
    "Dilsukhnagar",
    "Hyderabd",
    "83489439843"
  ]
  addpersondata(){
    /* this.addpersondata.push(this.pd); */
    this.pd=''
  }


}

