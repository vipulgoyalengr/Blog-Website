import { Component, OnInit } from '@angular/core';
import { LawsiteService } from '../lawsite.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  x;
  len;
  private Title:string;
  constructor(private t1:LawsiteService ,public route:ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('Title')){
        this.Title=paramMap.get('Title')
        this.t1.get_news1(this.Title).subscribe((res)=>{
      
          this.x=res;
          console.log(this.x);
          this.len=this.x.length
          console.log(this.len);
          // for(let i=0;i<this.x.length;i++){
            console.log(this.x.Extension)
          this.t1.show(this.x.Name,this.x.Extension).subscribe((res)=>{
            console.log(res);
            this.x['upload']=res['image'];
          //     // console.log(this.arr[i].upload);
            this.x['upload']='data:image/'+this.x.Extension+';base64,'+this.x.upload;
          //     // // this.upload=this.sanitizer.bypassSecurityTrustStyle(this.upload)
            console.log(this.x.upload);
          });
          // }
          console.log(this.x);
          
              });
      }
    });
  }

}
