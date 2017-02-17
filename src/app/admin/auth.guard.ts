import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(): boolean{
        let authenticated = false;
        if(this.authService.isAuthenticated()){
            authenticated = true;
        }else{
            this.router.navigate(["/admin/login"]);
        }
        return authenticated;
    }

}