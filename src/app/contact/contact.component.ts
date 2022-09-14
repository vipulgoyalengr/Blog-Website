import { Component, OnInit } from '@angular/core';
import {LawsiteService} from '../lawsite.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name;
email;
subject;
telephone;
message;
  constructor(private t1:LawsiteService) { }
  cont(){
    if (!this.name || !this.email || !this.subject || !this.telephone || !this.message){
      alert('enter all fields')
    }
    else{
    this.t1.cont_us(this.name,this.email,this.subject,this.telephone,this.message).subscribe((res)=>{
      // console.log(res)
      
    });
    alert("Successful");
  }
  }
  ngOnInit(): void {
  }

}
