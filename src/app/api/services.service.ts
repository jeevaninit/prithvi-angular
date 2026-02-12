import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }




  servicedata= [
    {
      "title": "Branding & Identity Design",
      "description": "Create a strong and consistent brand identity that resonates with your audience. Logo design, color palettes, typography, and brand guidelines that set you apart."
    },
    {
      "title": "Web Design & Development",
      "description": "Design responsive, user-friendly websites with cutting-edge technologies. SEO-optimized, fast-loading, and secure websites to improve user engagement and search rankings."
    },
    {
      "title": "Mobile App Design & Development",
      "description": "Design sleek, intuitive mobile applications for iOS, Android, and cross-platform systems. Build apps with advanced features like push notifications, in-app payments, and analytics integration."
    },
    {
      "title": "UI/UX Design",
      "description": "Create seamless user experiences with intuitive interfaces and visually stunning designs. Conduct user research and usability testing to optimize customer interaction."
    },
    {
      "title": "Digital Marketing",
      "description": "SEO, PPC, and social media marketing to increase online visibility. Content creation, email marketing, and analytics to drive traffic and conversions."
    }
  ]
}


