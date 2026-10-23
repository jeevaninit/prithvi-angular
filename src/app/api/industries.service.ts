import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndustriesService {

  constructor() { }




  industrydata= [
    {
      "title": "Retail & E-Commerce",
      "description": "Build engaging e-commerce platforms, integrate payment gateways, and design loyalty programs to enhance the customer journey."
    },
    {
      "title": "Healthcare & Wellness",
      "description": "Develop HIPAA-compliant telemedicine platforms, patient management systems, and wellness apps to transform care delivery."
    },
    {
      "title": "Education & E-Learning",
      "description": "Create interactive e-learning platforms, mobile education apps, and virtual classrooms to enhance learning experiences."
    },
    {
      "title": "Finance & Banking",
      "description": "Build secure fintech apps, payment systems, and data analytics tools to support informed decision-making and improve customer engagement."
    },
    {
      "title": "Travel & Hospitality",
      "description": "Design booking platforms, travel planning apps, and CRM systems to streamline operations and enhance guest experiences."
    },
    {
      "title": "Logistics & Transportation",
      "description": "Develop fleet management software, real-time tracking systems, and warehouse management platforms to optimize supply chains."
    }
  ]


}
