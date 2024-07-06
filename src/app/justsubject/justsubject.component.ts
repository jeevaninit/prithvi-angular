import { Component } from '@angular/core';
import { BehaviorserviceService } from '../behaviorservice.service';

@Component({
  selector: 'app-justsubject',
  templateUrl: './justsubject.component.html',
  styleUrls: ['./justsubject.component.css']
})
export class JustsubjectComponent {
  constructor(private bsd:BehaviorserviceService){}

  emit:any
  ngOnInit(): void {
      this.bsd.mydata1.subscribe(
        (myvalue:any)=>{
          console.log(myvalue)
        }
      )
  }
}
