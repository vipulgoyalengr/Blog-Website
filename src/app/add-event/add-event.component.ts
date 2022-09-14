import { Component, OnInit } from '@angular/core';
import { LawsiteService } from '../lawsite.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
app2;
title;
link;
img;
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
  submit(){
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
     this.name="event"+this.title;
     this.ctr++;
    this.tst.save_img(this.name,this.ext,this.imgUri).subscribe((res)=>{
      console.log(res);
    });
    // this.tst.save_img1(this.name,this.ext).subscribe((res)=>{
    //   //  console.log(res);
    //  });
    this.tst.events(this.title,this.name,this.ext,this.link).subscribe((res)=>{  
    });
  }
  ngOnInit(): void {
  }

}
