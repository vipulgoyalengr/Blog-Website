import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule ,Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {CertificationComponent} from './certification/certification.component'
import {CompetitionsComponent} from './competitions/competitions.component'
import {PublicationsComponent} from './publications/publications.component'
import {InternComponent} from './intern/intern.component'
import {ContactComponent} from './contact/contact.component'
import {AboutusComponent} from './aboutus/aboutus.component'
import {BlogComponent} from './blog/blog.component'
import {SubGuidelinesComponent} from './sub-guidelines/sub-guidelines.component'
import {GuidelinesComponent} from './guidelines/guidelines.component'
import {LoginComponent} from './login/login.component'
import {NewsComponent} from './news/news.component'
import {AddEventComponent} from './add-event/add-event.component'
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth.guard';
import {MessagesComponent} from './messages/messages.component';
import {AddRemoveComponent} from './add-remove/add-remove.component'



const route:Routes=[
  {path:'' , pathMatch: 'full', redirectTo: 'home'},
  {path:'home' , component:HomeComponent},
  {path:'cert' , component:CertificationComponent},
  {path:'comp' , component:CompetitionsComponent},
  {path:'publ' , component:PublicationsComponent},
  {path:'intern' , component:InternComponent},  
  {path:'cont' , component:ContactComponent},  
  {path:'about',component:AboutusComponent},
  {path:'guide',component:SubGuidelinesComponent},
  {path:'guides',component:GuidelinesComponent},
  {path:'blog/:Title',component:BlogComponent},
  {path:'login',component:LoginComponent},
  {path:'add',component:AddEventComponent},
  {path:'mess',component:MessagesComponent},
  {path:'addre',component:AddRemoveComponent},
  {path:'signin',component:SigninComponent},
  {path:'news/:Title',component:NewsComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
