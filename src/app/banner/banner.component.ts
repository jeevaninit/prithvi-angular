import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  show = false;

  selectedFeature: {
    name: string;
    description: string;
    path: string;
    brandingworks?: string[];
  } | null = null;

  features = [
    {
      name: 'Branding',
      description: 'Create and manage your brand identity.',
      path: 'assets/images/Coding A Website.svg',
      icon:'assets/images/global_tieup_branding.svg',
      brandingworks: ["Logo Design",
  "Business Card",
  "Personal Branding",
  "Brand Identity",
  "Brand Guidelines",
  "Visual Identity",
  "Brand Strategy",
  "Brand Voice",
  "Packaging Design",
  "Letterhead",
  "Website Design",
  "Social Media Branding",
  "Content Strategy",
  "Advertising Materials",
  "Marketing Collateral",
  "Signage",
  "Product Labeling",
  "Promotional Items",
  "Brand Story",
  "Email Signature",
  "Typography",
  "Color Palette",
  "Brand Architecture",
  "Brand Positioning",
  "Influencer Marketing",
  "Brand Partnerships",
  "Online Presence",
  "Corporate Stationery",
  "Branded Merchandise",
  "Video Branding",
  "Sponsorships",
  "Customer Experience Design",
  "Event Branding",
  "Print Ads",
  "Brand Ambassador Program"],
    },
    {
      name: 'UI & UX Designing',
      description: 'Design seamless user experiences.',
      path: 'assets/images/Designer Working.svg',
      icon:'assets/images/global_tieup_ui_ux.svg',
      brandingworks: [
        "Wireframing",
        "Prototyping",
        "UI Components",
        "Interface Layouts",
        "Interaction Design",
        "Visual Design",
        "Typography Design",
        "Icon Design",
        "Color Theory and Palette",
        "Buttons & Controls",
        "Grid Systems",
        "Responsive Design",
        "Mobile App UI Design",
        "Web UI Design",
        "Dashboard Design",
        "Navigation Design",
        "UI Animations",
        "Microinteractions",
        "Forms and Inputs Design",
        "Card Design",
        "UI Pattern Libraries",
        "High-Fidelity Mockups",
        "Design Systems",
        "Accessibility Design",
        "UI Kit",
        "Dark Mode Design",
        "Image Assets Optimization",
        "Touch Gestures Design",
        "User Research",
        "User Personas",
        "User Flows"
      
      ],
    },
    {
      name: 'Web Designing and Development',
      description: 'Build responsive and functional websites.',
      path: 'assets/images/Designer Desk.svg',
      icon:'assets/images/global_tieup_web_mobile_developent.svg',
      brandingworks: [  "Website Design",
        "Responsive Web Design",
        "UI/UX Design",
        "Website Development",
        "E-commerce Development",
        "Content Management Systems (CMS)",
        "Custom Web Development",
        "Website Maintenance",
        "Landing Page Design",
        "Website Redesign",
        "Mobile App Development",
        "Web Application Development",
        "Front-end Development",
        "Back-end Development",
        "Full-stack Development",
        "Web Hosting Services",
        "Domain Registration",
        "Search Engine Optimization (SEO)",
        "Website Speed Optimization",
        "Website Security & SSL Integration",
        "Web Analytics Integration",
        "Blog Development",
        "Social Media Integration",
        "Payment Gateway Integration",
        "API Development & Integration",
        "Multilingual Website Development",
        "Cross-browser Compatibility",
        "Content Strategy",
        "Website Copywriting",
        "Conversion Rate Optimization (CRO)"],
    },
    {
      name: 'Mobile Apps Design & Development',
      description: 'Build responsive and functional websites.',
      path: 'assets/images/Analyze Data.svg',
      icon:'assets/images/global_tieup_web_mobile_developent.svg',
      brandingworks: ["Mobile App Design",
  "UI/UX Design for Mobile Apps",
  "Custom Mobile App Development",
  "Native Mobile App Development (iOS/Android)",
  "Hybrid Mobile App Development",
  "Cross-Platform Mobile App Development",
  "Mobile App Prototyping",
  "App Wireframing",
  "App UI Design",
  "App Icon Design",
  "App Development Consultation",
  "App Store Optimization (ASO)",
  "App Maintenance & Updates",
  "Mobile App Integration",
  "API Integration for Mobile Apps",
  "Mobile App Testing & QA",
  "App Security & Privacy",
  "Mobile App Performance Optimization",
  "E-commerce Mobile App Development",
  "Mobile App Backend Development",
  "Push Notifications Integration",
  "Location-based Mobile App Development",
  "Geolocation & Maps Integration",
  "Real-time Mobile Apps",
  "Mobile Payment Gateway Integration",
  "Mobile App Analytics",
  "Mobile App User Feedback Integration",
  "App UI Animation & Transitions",
  "Mobile App Branding",
  "Mobile App Marketing & Launch Strategy"],
    },
    {
      name: 'Digital Marketing',
      description: 'Promote your brand online.',
      path: 'assets/images/Social Media.svg',
      icon:'assets/images/global_tieup_digital_marketing.svg',
      brandingworks:[
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Social Media Marketing (SMM)",
        "Content Marketing",
        "Email Marketing",
        "Affiliate Marketing",
        "Influencer Marketing",
        "Brand Strategy",
        "Online Reputation Management (ORM)",
        "Conversion Rate Optimization (CRO)",
        "E-commerce Marketing",
        "Mobile Marketing",
        "Display Advertising",
        "Video Marketing",
        "Website Analytics & Reporting",
        "Search Engine Marketing (SEM)",
        "Google Ads Management",
        "Facebook Ads Campaigns",
        "Instagram Marketing",
        "LinkedIn Marketing",
        "Twitter Marketing",
        "YouTube Marketing",
        "Remarketing & Retargeting",
        "Digital Public Relations (PR)",
        "App Store Optimization (ASO)",
        "Landing Page Optimization",
        "Lead Generation",
        "Local SEO & Local Marketing",
        "Content Strategy & Creation",
        "Influencer Campaign Management",
        "Digital Strategy Consulting"
      ]
    },
  ];

  showpopup(feature: { name: string; description: string; path: string; brandingworks?: string[] }) {
    this.selectedFeature = feature;
    this.show = true;
  }

  closepopup() {
    this.show = false;
  }

  closeoverly(e: any) {
    if (e.target.classList.contains('overlay')) {
      this.show = false;
    }
  }

  constructor() {}
}
