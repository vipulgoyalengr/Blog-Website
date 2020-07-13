import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LawsiteService {
  url="http://localhost:3000/";
private token;count=false;count1=false;count0=true;
private tokenTimer;
activate =true
count_len:any;
private currentpage=1;
  constructor(private http:HttpClient,public router:Router) { }
cont_us(name,email,subject,telephone,message){
return this.http.post(this.url + "cont",{"Name":name,"Email":email,"Subject":subject,"Telephone":telephone,"Message":message})

}
posts(title,auth,h1,h2,h3,sh11,sh12,sh21,sh22,sh23,sh31,sh32,sh33,c1,c2,c3,c4,c5,c6,c7,c8,c,d){
  return this.http.post(this.url +"posts",{"Title":title,"Author":auth,"h1":h1,"h2":h2,"h3":h3,"sh11":sh11,"sh12":sh12,"sh21":sh21,"sh22":sh22,"sh23":sh23,"sh31":sh31,"sh32":sh33,"sh33":sh33,"c1":c1,"c2":c2,"c3":c3,"c4":c4,"c5":c5,"c6":c6,"c7":c7,"c8":c8,"Name":c,"Extension":d})

}

save_img(name,ext,imgUri){
  console.log("fsdfs");
 return this.http.post("http://localhost:3000/image",{"imagepath":name,'ext':ext, "image":imgUri});

}
// save_img1(c,d){
//   console.log("fsdfs");
//  return this.http.post("http://localhost:3000/image1",{"Name":c,"Extension":d});
// }
events(title,name,ext,link){
  return this.http.post(this.url+"events",{"Title":title,"Name":name,"Extension":ext,"Link":link});
}
getToken(){ 
  return this.token;
}
get_blog(){
return this.http.get(this.url+"get_blog")
}
get_events(){
    return this.http.get(this.url+"get_events")
}
get_blogs(){
  const queryParams=`?page=${this.currentpage}`
  return this.http.get(this.url+"get_blogs"+queryParams)
  }

increment(){
  this.currentpage=this.currentpage+1
    this.count=true
  const queryParams=`?page=${this.currentpage}`
  return this.http.get(this.url+"get_blogs"+queryParams)
}
decrement(){
  this.currentpage=this.currentpage-1
  if (this.currentpage<=1){
this.count=false
  }
  const queryParams=`?page=${this.currentpage}`
  return this.http.get(this.url+"get_blogs"+queryParams)
}
getLen(){
  return this.http.get(this.url+"get_len")
}

login(username,password){
  return this.http.post<{token:string,expiresIn:number}>(this.url+"login",{"Username":username,"Password":password}).subscribe((res)=>{
    console.log(res)
    const token=res.token;
    this.token=token
    if(token){
    const expiresInDuration=res.expiresIn;
    this.setAuthTimer(expiresInDuration)
    this.activate=false
    const now=new Date();
    const expirationDate=new Date(now.getTime()+expiresInDuration*1000)
    this.saveAuthData(token,expirationDate)
    console.log(this.activate)
    this.router.navigate(['/home'])
    }

  }
  );
}
private setAuthTimer(duration:number){
  console.log("setting timer"+duration)
  this.tokenTimer=setTimeout(()=>{
    this.logout();
  },duration*1000);
}
autoAuthUser(){
  const authInformation=this.getAuthData();
  if(!authInformation){
    return;
  }
  const now=new Date();
  const expiresIn=authInformation.expirationDate.getTime()-now.getTime()
  if (expiresIn>0){
    this.token=authInformation.token;
    this.activate=false;
    this.setAuthTimer(expiresIn/1000)

  }
}
private getAuthData(){
  const token=localStorage.getItem("token")
  const expirationDate=localStorage.getItem("expiration")
  if (!token || !expirationDate){
    return;
  }
  return{
    token:token,
    expirationDate:new Date(expirationDate)
  }
}
getIsAuth(){
  return this.activate;
}
logout(){
  this.token=null;
  this.activate=true;
  clearTimeout(this.tokenTimer);
  this.clearAuthData();
  console.log('lg1');
  this.router.navigate(["about"])
}
private saveAuthData(token:string,expirationDate:Date){
  localStorage.setItem('token',token);
  localStorage.setItem('expiration',expirationDate.toISOString());
}
private clearAuthData(){
  localStorage.removeItem('token')
  localStorage.removeItem('expiration')
}
show(img,ext){
  return this.http.post("http://localhost:3000/getimage",{"img":img,'ext':ext});
}
signin(username,password){
  return this.http.post(this.url+"signin",{"Username":username,"Password":password})
}
}
