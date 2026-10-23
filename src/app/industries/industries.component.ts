import { Component } from '@angular/core';
import { IndustriesService } from '../api/industries.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent {
  constructor(private industries:IndustriesService){}
  industrydata:any[]=this.industries.industrydata
}
