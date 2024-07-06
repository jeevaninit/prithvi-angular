import { Component, OnDestroy } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnDestroy{
contact:string='ITproSkillSet-Dilsukhnagar';

constructor(private servicedata:UserdataService){}

mypdata=this.servicedata.mypersonaldata;

ngOnDestroy(): void {
    alert('exit form contact page...')
}
}
