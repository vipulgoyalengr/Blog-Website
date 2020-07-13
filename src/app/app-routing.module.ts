import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule ,Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {CertificationComponent} from './certification/certification.component'
import {CompetitionsComponent} from './competitions/competitions.component'
import {PublicationsComponent} from './publications/publications.component'
import {InternshipComponent} from './internship/internship.component'
import {ContactComponent} from './contact/contact.component'
import {AboutusComponent} from './aboutus/aboutus.component'
import {BlogComponent} from './blog/blog.component'
import {SubGuidelinesComponent} from './sub-guidelines/sub-guidelines.component'
import {GuidelinesComponent} from './guidelines/guidelines.component'
import {LoginComponent} from './login/login.component'
import {AddEventComponent} from './add-event/add-event.component'
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth.guard';


const route:Routes=[
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'cert' , component:CertificationComponent},
  {path:'comp' , component:CompetitionsComponent},
  {path:'publ' , component:PublicationsComponent},
  {path:'intern' , component:InternshipComponent},  
  {path:'cont' , component:ContactComponent},  
  {path:'about',component:AboutusComponent},
  {path:'guide',component:SubGuidelinesComponent},
  {path:'guides',component:GuidelinesComponent,canActivate:[AuthGuard]},
  {path:'blog',component:BlogComponent},
  {path:'login',component:LoginComponent},
  {path:'add',component:AddEventComponent},
  {path:'signin',component:SigninComponent,canActivate:[AuthGuard]}
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
