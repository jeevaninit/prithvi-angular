import { Component } from '@angular/core';
import { TechnologiesService } from '../api/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  constructor(private technologies:TechnologiesService){}
  technologiesData:any[]=this.technologies.data
}
