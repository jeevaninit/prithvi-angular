import { Component } from '@angular/core';


@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css']
})
export class HeadernavComponent {

  show=false;

  menupopup(){
    this.show = !this.show;
  }

  closepopup(){
    this.show=false;
  }

  hideMenu() {
    this.show = false;
  }

    menuitems: any[] = [
      /* { label: 'BUSINESS SOLUTIONS', path: '/business-solutions' }, */
      { label: 'SERVICES', path: '/myservices',imgpath:'../assets/images/Global_TieUp_Logo.svg'},
      { label: 'TECHNOLOGIES', path: '/technologies',imgpath:'../assets/images/Global_TieUp_Logo.svg' },
      { label: 'INDUSTRIES', path: '/industries',imgpath:'../assets/images/Global_TieUp_Logo.svg' },
      { label: 'ABOUT US', path: '/about',imgpath:'../assets/images/Global_TieUp_Logo.svg' },
      { label: 'CONTACT US', path: '/contact',imgpath:'../assets/images/Global_TieUp_Logo.svg' },

    ];
    
  path:any='../assets/images/Jeevan_it_main_logo_02.svg'
}
