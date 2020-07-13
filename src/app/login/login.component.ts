import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LawsiteService } from '../lawsite.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username;
password;
x
  constructor(private router:Router,private t1:LawsiteService) { }
go(){
this.t1.login(this.username,this.password)
// .subscribe((res)=>{
//   console.log(res)
// },(err)=>{
//   if(err.status==200){
//     this.t1.activate=false
//     this.router.navigate(['/home']);


//   }
// }
// );
}
  ngOnInit(): void {
  }

}
