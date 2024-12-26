import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIfdirectiveComponent } from './ng-ifdirective/ng-ifdirective.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { HomeComponent } from './home/home.component';
import { ChildoneComponent } from './childone/childone.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { MypipePipe } from './mypipe.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { HeaderbannerComponent } from './headerbanner/headerbanner.component';
import { HeadercontentComponent } from './headercontent/headercontent.component';
import { MybootstrapcompComponent } from './mybootstrapcomp/mybootstrapcomp.component';
import { NgbNavConfig, NgbNavModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoostrapbannerComponent } from './boostrapbanner/boostrapbanner.component';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { GlobaltieupComponent } from './globaltieup/globaltieup.component';
import { ItproskillsetComponent } from './itproskillset/itproskillset.component';
import { ChildcommunicationComponent } from './childcommunication/childcommunication.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { MenubarComponent } from './menubar/menubar.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderformComponent } from './headerform/headerform.component';
import { ServicesComponent } from './services/services.component';
import { SideformComponent } from './sideform/sideform.component';
import { MyoutputdecoratorComponent } from './myoutputdecorator/myoutputdecorator.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalDataComponent } from './global-data/global-data.component';
import { GetapidataComponent } from './getapidata/getapidata.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductsComponent } from './products/products.component';
import { ConditionrouteComponent } from './conditionroute/conditionroute.component';
import { LoginComponent } from './login/login.component';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { AngularReactiveFormComponent } from './angular-reactive-form/angular-reactive-form.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AfterviewinitComponent } from './afterviewinit/afterviewinit.component';
import { AftercontentinitComponent } from './aftercontentinit/aftercontentinit.component';
import { ObservableComponent } from './observable/observable.component';
import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';
import { JustsubjectComponent } from './justsubject/justsubject.component';
import { HeaderContentComponent } from './lalith_angular_201024/header-content/header-content.component';
import { NavbarlalithComponent } from './navbarlalith/navbarlalith.component';
import { BodylalithComponent } from './bodylalith/bodylalith.component';
import { FooterlalithComponent } from './footerlalith/footerlalith.component';


@NgModule({
  declarations: [
    AppComponent,

    ContactComponent,
    AttributeBindingComponent,
    StyleBindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent,
    NgIfdirectiveComponent,
    NgswitchComponent,
    AttributedirectiveComponent,
    HomeComponent,
    ChildoneComponent,
    ChildtwoComponent,
    MypipesComponent,
    MypipePipe,
    CustompipeComponent,
    TemplatereferenceComponent,
    ProjectTwoComponent,
    HeadernavComponent,
    HeaderbannerComponent,
    HeadercontentComponent,
    MybootstrapcompComponent,
    BoostrapbannerComponent,
    ParentComponent,
    ChildComponent,
    MaincomponentComponent,
    GlobaltieupComponent,
    ItproskillsetComponent,
    ChildcommunicationComponent,
    ViewchildComponent,
    AssignmentComponent,
    MenubarComponent,
    BannerComponent,
    HeaderformComponent,
    ServicesComponent,
    SideformComponent,
    MyoutputdecoratorComponent,
    GlobalDataComponent,
    GetapidataComponent,
    UserslistComponent,
    UserdetailsComponent,
    ProductsComponent,
    ConditionrouteComponent,
    LoginComponent,
    AngularformsComponent,
    AngularReactiveFormComponent,
    LifecycleComponent,
    AfterviewinitComponent,
    AftercontentinitComponent,
    ObservableComponent,
    BehaviorsubjectComponent,
    JustsubjectComponent,
    HeaderContentComponent,
    NavbarlalithComponent,
    BodylalithComponent,
    FooterlalithComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [FormsModule],
      [NgbModule],
      [NgbNavModule],
      [NgbCarouselModule, FormsModule ],
      MatSlideToggleModule,
      [MatCardModule, MatButtonModule],
      [MatIconModule],
      [HttpClientModule],
      ReactiveFormsModule,
      FormsModule,
      MatIconModule,
      [MatCardModule],
      

   


  ],
  providers: [NgbNavConfig],
  bootstrap: [AppComponent],

})
export class AppModule { }

/* 

Directives:

1. structural
  -ngIF
  -ngFor
  -ngSwitch

2. Attribute
  -ngClass
  -ngStyle
  -ngModel
  
3. component

*/