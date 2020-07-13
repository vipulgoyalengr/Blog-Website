import { Component, OnInit } from '@angular/core';
import { LawsiteService } from '../lawsite.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
x:any;
y:any
arr:any=[];

  constructor(public t1:LawsiteService) { 
    this.t1.getLen().subscribe((res)=>{
      this.y=res
      if (this.y.length>3){
        console.log(this.y.length)
        this.t1.count1=true
      }
    })
   
    this.t1.get_blogs().subscribe((res)=>{
      this.x=res
      console.log(this.x)
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
  }

increment(){
this.t1.increment().subscribe((res)=>{
  this.x=res
  console.log(this.x)
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
}
decrement(){
  this.t1.decrement().subscribe((res)=>{
    this.x=res
    console.log(this.x)
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
}

  ngOnInit(): void {
  }

}
