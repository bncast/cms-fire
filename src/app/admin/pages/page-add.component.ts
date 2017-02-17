import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { PagesService } from './pages.service';

import 'rxjs/add/operator/switchMap';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { SummernoteComponent } from 'ng2-alt-summernote/ng2-alt-summernote';


@Component({
  selector: 'app-page-add',
  templateUrl: './page-add.component.html',
  styleUrls: ['./page-add.component.css'],
  
})


export class PageAddComponent implements OnInit {
  header: string;
  title: string;
  content: string = String();
  creator: string;
  buttonString: string;

  private key: string;

  disabled: boolean = false;
  options: SummernoteOptions = {
    height: 100,
    toolbar: [['style', ['bold', 'italic', 'underline', 'clear']],
    ['para', ['ul', 'ol', 'paragraph']]
    ]
  };

  constructor(
    private pageService:PagesService,
    private location: Location,
    private route: ActivatedRoute,
    private af: AngularFire
  ) {

   }
  
  savePage(){
    console.log(this.content);
    if(this.key != undefined){
      console.log("update");
      this.pageService.update(this.key, this.title, this.content)//last parameter should be the value for updated_by
        .then(_ => this.back())
        .catch(err => console.log(err, 'You do not have access!'));
    }else{
      this.pageService.create(this.title, this.content) //last parameter should be the value for created_by
        .then(_ => this.back())
        .catch(err => console.log(err, 'You do not have access!'));
    }
  }

  back(){
    this.location.back();
  }

  ngOnInit(){
    this.header = "Add Page";
    this.buttonString = "Add";
    
    this.route.params
      .switchMap((params: Params) => this.pageService.getPage(params['id']))
      .subscribe(page => {
        if(page.$key !== 'undefined' && page.$key !== null){
          console.log(page.$key);
          this.title = page.title;
          this.content = page.content;
          this.key = page.$key;
          this.header = "Edit Page"
          this.buttonString = "Update";
        }
      });

      
  }

}
