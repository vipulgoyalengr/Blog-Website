import { Component, OnInit } from '@angular/core';
import { LawsiteService } from '../lawsite.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
username;
password;
cpassword;
  constructor(private t1:LawsiteService) { }
  go(){
    this.t1.signin(this.username,this.password).subscribe((res)=>{
    });
  }
  ngOnInit(): void {
  }

}
