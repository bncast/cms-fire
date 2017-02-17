import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { PagesService } from '../admin/pages/pages.service';

import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit{

  

  titleShort: string = "ICAAC";
  title: string = "International Culinary Arts Academy Cebu";
  catchPhrase: string = "Your Gateway to the Culinary World";

  pages: FirebaseListObservable<any>;


  constructor(
    private pageService: PagesService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.pages = this.pageService.getPages();
    
    // scrollEffect();
  }

 


}
