import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { NgxSpinnerModule } from "ngx-spinner";


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CertificationComponent } from './certification/certification.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { PublicationsComponent } from './publications/publications.component';
import { InternshipComponent } from './internship/internship.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { BlogComponent } from './blog/blog.component';
import { SubGuidelinesComponent } from './sub-guidelines/sub-guidelines.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AuthInterceptor } from './auth-interceptor';
import { AddEventComponent } from './add-event/add-event.component';
import { MessagesComponent } from './messages/messages.component';
import { AddRemoveComponent } from './add-remove/add-remove.component';
import { InternComponent } from './intern/intern.component';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CertificationComponent,
    CompetitionsComponent,
    PublicationsComponent,
    InternshipComponent,
    ContactComponent,
    AboutusComponent,
    FooterComponent,
    GuidelinesComponent,
    BlogComponent,
    SubGuidelinesComponent,
    LoginComponent,
    SigninComponent,
    AddEventComponent,
    MessagesComponent,
    AddRemoveComponent,
    InternComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
