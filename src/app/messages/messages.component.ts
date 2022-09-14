import { Component, OnInit } from '@angular/core';
import { LawsiteService } from '../lawsite.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
x;
  constructor(private t1:LawsiteService) { 
    this.t1.get_message().subscribe((res)=>{
this.x=res;

    });
  }

  ngOnInit(): void {
  }

}
