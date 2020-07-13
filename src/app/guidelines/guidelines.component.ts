import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LawsiteService } from '../lawsite.service';
@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.css']
})
export class GuidelinesComponent implements OnInit {
message
c1;c2;c3;c4;c5;c6;c7;c8;
sh11;sh12;sh21;sh22;sh23;sh31;sh32;sh33;
h1;h2;h3;
title;auth;
img;
app2;
slashIndex: number;
  semiColonIndex: number;
  commaIndex: number;
  imgUri: any;
  ext: any;
  upload: any=[];
  ctr=0;
  name;
  constructor(private tst:LawsiteService) { }
  preview(event){
    let FileInput = event.target;
    let file=event.target.files[0];
    if(FileInput && file){
      var reader =new FileReader();
      reader.readAsDataURL(file);
      reader.onload=(e:any)=>
      {
        this.img=e.target.result;
      }
    }
  }
cont(){
  console.log(this.img);
  for(let x=0;x<this.img.length;x++){
    if(this.img[x] === "/"){
      this.slashIndex=x;
     //  console.log(this.slashInd ex);
    }
    if(this.img[x] === ";"){
     this.semiColonIndex=x;
     // console.log(this.semiColonIndex);
   }
   if(this.img[x] === ","){
     this.commaIndex=x;
     // console.log(this.commaIndex);
     break;
   }
 }
   this.imgUri=this.img.substring(this.commaIndex+1);
   // console.log(this.imgUri);
   this.ext=this.img.substring(this.slashIndex+1,this.semiColonIndex);
   // console.log(this.ext);
   this.name="image"+this.ctr;
   this.ctr++;
  this.tst.save_img(this.name,this.ext,this.imgUri).subscribe((res)=>{
    console.log(res);
  });
  // this.tst.save_img1(this.name,this.ext).subscribe((res)=>{
  //   //  console.log(res);
  //  });
  this.tst.posts(this.title,this.auth,this.h1,this.h2,this.h3,this.sh11,this.sh12,this.sh21,this.sh22,this.sh23,this.sh31,this.sh32,this.sh33,this.c1,this.c2,this.c3,this.c4,this.c5,this.c6,this.c7,this.c8,this.name,this.ext).subscribe((res)=>{
    console.log(res)

  });

}
  ngOnInit(): void {
  }

}
