import { Component } from '@angular/core';

@Component({
  selector: 'app-sarath',
  templateUrl: './sarath.component.html',
  styleUrls: ['./sarath.component.css']
})
export class SarathComponent {
  name: string = 'Sarath';
  age: number = 30;
  isStudent: boolean = true;
  hobbies: string[] = ['Reading', 'Traveling', 'Cooking'];
  address: { city: string; country: string } = {
    city: 'Bangalore',
    country: 'India'
  };
  path: any = '../assets/images/Jeevan_it_main_logo_02.svg';
  myMenuItems: any[] = [
    { label: 'BUSINESS SOLUTIONS', path: '/business-solutions' },
    { label: 'SERVICES', path: '/myservices' },
    { label: 'TECHNOLOGIES', path: '/technologies' },
    { label: 'INDUSTRIES', path: '/industries' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'CONTACT US', path: '/contact' },
  ];
}
