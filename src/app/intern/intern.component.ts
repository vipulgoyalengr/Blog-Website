import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent implements OnInit {

  x
  constructor(private http:HttpClient) {
    this.http.get('http://localhost:3000/fins').subscribe((res)=>{
      this.x=res
      this.x.toString().split("\n");
      console.log(this.x.toString());

      console.log("hello"+this.x);
      // this.x=`my \ntitle`
    });


   }
go(){
  this.http.get('http://localhost:3000/fins');
}

form(){
  window.open("https://forms.gle/TsqzqMFLcvmbbF5D7")
}
  ngOnInit(): void {
  }

}
