import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { AuthService } from '../auth.service';
import * as firebase from 'firebase';

@Injectable()
export class PagesService {
  private pages: FirebaseListObservable<any>;
  
  constructor(
    private af:AngularFire,
    private authService: AuthService
    ) { 
    this.pages = this.af.database.list("/pages");
  }

  getPage(key: string): FirebaseObjectObservable<any>{
    return this.af.database.object("/pages/"+key);
  }

  getPages(): FirebaseListObservable<any>{
    let pages = this.af.database.list("/pages", {
      query: {
        orderByChild: "status",
        equalTo: "active"
      }
    });
    return pages;
  }

  create(newTitle: string, newContent: string): firebase.database.ThenableReference{
    let timestamp = firebase.database.ServerValue.TIMESTAMP;
    
    let newCreator = this.authService.displayName;

    const promise = this.pages.push({title: newTitle, content: newContent, created_by: newCreator, created_at: timestamp, status: "active" });
    return promise;
  }

   update(key: string, newTitle: string, newContent: string): firebase.Promise<void>{
    let page = this.af.database.object("/pages/"+key);
    let newCreator = this.authService.displayName;
    let timestamp = firebase.database.ServerValue.TIMESTAMP;
    const promise = page.update({title: newTitle, content: newContent, updated_by: newCreator, updated_at: timestamp });
    return promise;
  }

  delete(key: string){
     let page = this.af.database.object("/pages/"+key);
    const promise = page.update({status: "inactive" });
    return promise;
  }
}
