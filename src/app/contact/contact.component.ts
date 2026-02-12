import { Component, OnDestroy } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
contact:string='More information Please Contact';

constructor(private servicedata:UserdataService){}

mypdata:any[]=this.servicedata.mypersonaldata;



/* ngOnDestroy(): void {
    alert('exit form contact page...')
} */
}
