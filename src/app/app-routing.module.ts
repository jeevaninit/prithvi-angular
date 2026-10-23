import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { NgIfdirectiveComponent } from './ng-ifdirective/ng-ifdirective.component';
import { HomeComponent } from './home/home.component';
import { ChildoneComponent } from './childone/childone.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductsComponent } from './products/products.component';

import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { MyservicesComponent } from './myservices/myservices.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { IndustriesComponent } from './industries/industries.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { SarathComponent } from './sarath/sarath.component';

const routes: Routes = [
  {path:'',
    component:BannerComponent
  },
  {
    path:'business-solutions',
    component:UserslistComponent
  },
  {
    path:'myservices',
    component:MyservicesComponent
  },
  {
    path:'technologies',
    component:TechnologiesComponent
  },
  {
    path:'industries',
    component:SarathComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },

{path:'AttributeBinding',
  component:AttributeBindingComponent
},
{path:'userslist',
  component:UserslistComponent
},
{
  path:'userdetails/:id',
  component:UserdetailsComponent
},
{
  path:'products',component:ProductsComponent
},
{
  path:'ClassBinding',
  component:ClassbindingComponent
},
{
  path:'EventBinding',
  component:EventbindingComponent
},{
  path:'NgIfDirective',
  component:NgIfdirectiveComponent
},{
  path:'NgSwitchDirective',
  component:NgIfdirectiveComponent
},

{
  path:'contact',
  component:ContactComponent,
  canActivate:[AuthService]
},{
path:'login',
component:LoginComponent
},
{
  path:'home',
  component:HomeComponent,
  canActivate:[AuthService],
  children:[
    {
      path:'childone',
      component:ChildoneComponent
    },
    
    {
      path:'childtwo',
      component:ChildtwoComponent
    },
    { path: '', redirectTo: '/business-solutions', pathMatch: 'full' },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
