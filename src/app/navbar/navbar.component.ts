import { Component, OnInit } from '@angular/core';
import { LawsiteService } from '../lawsite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public t1:LawsiteService,public router:Router) { }
logout(){
  console.log('lg')
  this.t1.logout();

}
divert1(){
  this.t1.d1=true;

  this.router.navigate(['/about']);}
divert(){
  this.t1.d1=false;

  this.router.navigate(['/about']);}
  ngOnInit(): void {
  }

}
