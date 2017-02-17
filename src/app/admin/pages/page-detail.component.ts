import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { PagesService } from './pages.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  title:string;
  content:string;
  created:string;
  

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pageService: PagesService
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.pageService.getPage(params['id']))
      .subscribe(page => {
        this.title = page.title;
        this.content = page.content;
        this.created = "Created by: " + page.created_by + " at " + new Date(page.created_at);
        if(page.updated_by){
          this.created += " Updated by: "+ page.updated_by + " at " + new Date(page.updated_at);
        }
        
        
      });
  }

  back(){
    this.location.back();
  }
}
