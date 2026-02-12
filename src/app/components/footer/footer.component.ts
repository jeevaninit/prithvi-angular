import { Component } from '@angular/core';
import { IndustriesService } from 'src/app/api/industries.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  menuitems: any[] = [
    /* { label: 'BUSINESS SOLUTIONS', path: '/business-solutions' }, */
    { label: 'SERVICES', path: '/myservices' },
    { label: 'TECHNOLOGIES', path: '/technologies' },
    { label: 'INDUSTRIES', path: '/industries' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'CONTACT US', path: '/contact' },

  ];


  constructor(private industries:IndustriesService){}
    industrydata:any[]=this.industries.industrydata

}
