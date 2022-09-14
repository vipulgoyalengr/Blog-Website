import { Component, OnInit } from '@angular/core';
import { LawsiteService } from '../lawsite.service';
// import { ToastrManager } from 'ng6-toastr-notifications';
import {NgxSpinnerService} from 'ngx-spinner'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
x:any;
y:any;
len;
len0;
now;
  constructor(private t1:LawsiteService,private spinner: NgxSpinnerService) { 
    this.spinner.show();
    
    this.now=new Date().getDate()+ new Date().getMonth() +new Date().getFullYear();
    console.log(this.now)
    this.t1.get_events().subscribe((res)=>{
      this.y=res
      // console.log(res);
      this.len0=this.y.length
      for(let i=0;i<this.y.length;i++){
        console.log(this.y[i].Extension)
      this.t1.show(this.y[i].Name,this.y[i].Extension).subscribe((res)=>{
        console.log(res);
        this.y[i]['upload']=res['image'];
      //     // console.log(this.arr[i].upload);
        this.y[i]['upload']='data:image/'+this.y[i].Extension+';base64,'+this.y[i].upload;
      //     // // this.upload=this.sanitizer.bypassSecurityTrustStyle(this.upload);
        // console.log(this.y[i].upload);
      });
      }
      
    });
    
    this.t1.get_news().subscribe((res)=>{
      
this.x=res
console.log(this.x.length);
this.len=this.x.length
for(let i=0;i<this.x.length;i++){
  console.log(this.x[i].Extension)
this.t1.show(this.x[i].Name,this.x[i].Extension).subscribe((res)=>{
  console.log(res);
  this.x[i]['upload']=res['image'];
//     // console.log(this.arr[i].upload);
  this.x[i]['upload']='data:image/'+this.x[i].Extension+';base64,'+this.x[i].upload;
//     // // this.upload=this.sanitizer.bypassSecurityTrustStyle(this.upload);
  // console.log(this.x[i].upload);
});
}

    });
    this.spinner.hide();
    
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
  }

  ngOnInit(): void {
  }

}
