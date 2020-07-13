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
  ngOnInit(): void {
  }

}
