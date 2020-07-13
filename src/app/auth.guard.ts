import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LawsiteService } from './lawsite.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private t1:LawsiteService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        const isAuth=this.t1.getIsAuth();
        if (isAuth){
            this.router.navigate(['/login'])
        }
    return !isAuth;
    }

}