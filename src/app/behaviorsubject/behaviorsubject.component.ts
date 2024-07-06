import { Component, OnInit } from '@angular/core';
import { BehaviorserviceService } from '../behaviorservice.service';

@Component({
  selector: 'app-behaviorsubject',
  templateUrl: './behaviorsubject.component.html',
  styleUrls: ['./behaviorsubject.component.css']
})
export class BehaviorsubjectComponent implements OnInit {

  constructor(private bsd:BehaviorserviceService){}

  ngOnInit(): void {
      this.bsd.mydata.subscribe(
        (myvalue:any)=>{
          console.log(myvalue)
        }
      )
  }
}
