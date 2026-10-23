import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  mypersonaldata:any=[{name:'Jeevan IT Solutions',
    course:'Opp. Konark Theater, Near Dilsukhnagar Metro Station, Beside Shipi Restourent, Dilsukhnagar, Hyderabad - 060',
    experience:'9493108933',
    email:'jeevanitinfo@gmail.com',
  }];

  fruits:any=['Banana','cherry','Orange'];
  course:string='Angular-8Am';

  constructor() { }
}
