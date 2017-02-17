import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './admin/login.component';
import { AdminComponent } from './admin/admin.component';
import { PagesComponent } from './admin/pages/pages.component';
import { PageAddComponent } from './admin/pages/page-add.component'; 
import { PageDetailComponent } from './admin/pages/page-detail.component';

import { MainComponent } from './view/main.component';

import { AuthGuard } from './admin/auth.guard';
import { AuthService } from './admin/auth.service';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'pages', canActivate: [ AuthGuard ], 
        children:[
          { path: '', component: PagesComponent },
          { path: 'add', component: PageAddComponent },
          { path: 'detail', component: PageDetailComponent }
        ] 
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ],
  declarations: [],
  providers: [ AuthGuard, AuthService ] 
})
export class AppRoutingModule { }
