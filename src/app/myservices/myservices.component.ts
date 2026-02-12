import { Component } from '@angular/core';
import { ServicesService } from '../api/services.service';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css']
})
export class MyservicesComponent {

  constructor(private myservices:ServicesService){}
  serviceData:any[]=this.myservices.servicedata

}
