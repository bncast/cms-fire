import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // data models
  username: string;
  password: string;

  // label strings
  lbl_username: string = "Email";
  lbl_password: string = "Password";
  lbl_login: string = "Login";
  lbl_error: string = "";
  
  constructor(
    private router:Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    
    this.authService.getAuth().subscribe(auth => {
      console.log(auth);
      if(auth){
        this.router.navigate(["/admin/pages"]);
      }
    });
  }

  

  login(){
    console.log("username "+ this.username + ", password " + this.password);
    this.authService.login(this.username, this.password).then((authState) => {
      this.router.navigate(["/admin/pages"]);
    },(err) => {
      this.lbl_error = err.message;
    });
  }

}
