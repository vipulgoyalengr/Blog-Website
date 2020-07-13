import {HttpInterceptor,HttpRequest,HttpHandler} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LawsiteService } from './lawsite.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private t1:LawsiteService){
    }
    intercept(req:HttpRequest<any>,next:HttpHandler){
        const authtoken=this.t1.getToken();
        const authrequest=req.clone({
headers:req.headers.set("Authorization","Bearer"+authtoken)
        });
        return next.handle(req);
    }
}