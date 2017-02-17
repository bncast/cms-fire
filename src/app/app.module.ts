import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './admin/pages/pages.module'

import { LoginComponent } from './admin/login.component';
import { PagesComponent } from './admin/pages/pages.component';
import { AdminComponent } from './admin/admin.component';
import { PageAddComponent } from './admin/pages/page-add.component';

import { PagesService } from './admin/pages/pages.service';

import { MainComponent } from './view/main.component';




export const firebaseConfig = {
  apiKey: "AIzaSyB_5k1OE_mRd1Ygg6uDHse42Acdmv3M1Xk",
  authDomain: "fir-cms-a54b2.firebaseapp.com",
  databaseURL: "https://fir-cms-a54b2.firebaseio.com",
  storageBucket: "fir-cms-a54b2.appspot.com",
  messagingSenderId: "942238892915"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    MainComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
