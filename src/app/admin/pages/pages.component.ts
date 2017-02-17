import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';


import { PagesService } from './pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

   pages: FirebaseListObservable<any>;
  
  constructor(
    private pageService: PagesService,
    private router: Router) {
    
  }

  ngOnInit(){
    this.getPages();
  }

  getPages(){
    this.pages = this.pageService.getPages();
  }

  updatePage(key: string){
    this.router.navigate(['/admin/pages/add', {id: key}]);
  }

  deletePage(key: string){
    this.pageService.delete(key);
  }

  


}
