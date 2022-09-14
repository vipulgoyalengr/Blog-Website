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
y:any;
m:any;
k=0;
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
      this.m=res
      this.x=this.m.reverse()
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
    console.log(this.x)


    // for(let i=this.x.length-1;i>=0;i--){
    //   this.m[this.k]=this.x[i];
    //   console.log(this.m)
    //   console.log("k")
    //   this.k++;
    //       }
    //       console.log(this.m)
          });
  }

increment(){
  this.t1.len2++;
  if (((this.t1.len2*3)-this.y.length)<3){
    this.t1.count1=false;
    this.t1.count=true;  
  }
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
  this.t1.len2--;
  if(this.t1.len2==0){
    this.t1.count=true;
    this.t1.count1=true;
  }
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
