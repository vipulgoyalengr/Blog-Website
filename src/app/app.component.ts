import { Component, OnInit } from '@angular/core';
import { LawsiteService } from './lawsite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lawsite';
  constructor(private t1:LawsiteService){}
  ngOnInit(){
this.t1.autoAuthUser() ;
this.t1.getLen().subscribe((res)=>{
  this.t1.count_len=res
});
  }
}
