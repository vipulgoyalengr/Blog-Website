import { Component, OnInit } from '@angular/core';
import {LawsiteService} from '../lawsite.service'

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  app1;
  img;
  flag=0;
  arr:any=[];
  a;
  i;
  j;
  k:any=[];
  ctr=0;
  name;
  cmp;
  app2;
  slashIndex: number;
  semiColonIndex: number;
  commaIndex: number;
  imgUri: any;
  ext: any;
  upload: any=[];
  constructor(public tst:LawsiteService) { }

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
  save(){
   //  let ctr=0;
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
      console.log('he');
      console.log(res);
    });
    // this.tst.save_img1(this.name,this.ext).subscribe((res)=>{
    //   //  console.log(res);
    //  });
    // this.tst.save_img2(v.Lab_name,this.tst.get_email(),this.name,this.ext,this.app1).subscribe((res)=>{
    //   console.log(res);
    // });
    // this.toastr.successToastr('Uploaded Successfully', 'Success!');
  }
  

  ngOnInit(): void {
  }

}
