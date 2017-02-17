import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { PagesComponent } from './pages.component';
import { PagesService } from './pages.service';
import { PageAddComponent } from './page-add.component';
import { PageDetailComponent } from './page-detail.component';


import 'bootstrap/dist/js/bootstrap.min.js';
import 'summernote/dist/summernote.min.js';
import { SummernoteModule, SummernoteComponent } from 'ng2-alt-summernote/ng2-alt-summernote';


@NgModule({
  imports:      [ CommonModule, FormsModule, RouterModule ],
  declarations: [ PagesComponent, PageAddComponent, PageDetailComponent, SummernoteComponent ],
  exports:      [ PagesComponent, PageAddComponent, PageDetailComponent ],
  providers:    [ PagesService ]
})
export class PagesModule { }
