import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor() { }


    data= [
      {
        "title": "Web Technologies",
        "description": "Expertise in modern web development frameworks like React, Angular, and Vue.js for creating dynamic and interactive websites."
      },
      {
        "title": "Mobile Technologies",
        "description": "Specializing in Swift, Kotlin, Flutter, and React Native to create seamless mobile applications for iOS and Android."
      },
      {
        "title": "Backend Development",
        "description": "Build secure, high-performance backend systems using technologies like Node.js, Python, PHP, Java, and .NET."
      },
      {
        "title": "Cloud Computing",
        "description": "Design and deploy cloud solutions using AWS, Microsoft Azure, and Google Cloud for scalability and reliability."
      },
      {
        "title": "AI & Machine Learning",
        "description": "Integrate intelligent algorithms and predictive models into your solutions for smarter decision-making and automation."
      },
      {
        "title": "DevOps & CI/CD",
        "description": "Implement DevOps pipelines for continuous integration and delivery, improving development efficiency and reducing deployment risks."
      }
    ]
  
  

}
