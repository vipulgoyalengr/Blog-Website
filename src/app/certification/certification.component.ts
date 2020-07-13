import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
x
  constructor(private http:HttpClient) { 
    this.http.get('http://localhost:3000/fin').subscribe((res)=>{
      this.x=res
      console.log(this.x[0].id);
    });
  }

  ngOnInit(): void {
  }


}
