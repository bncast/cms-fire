import { Injectable } from '@angular/core';
import { AngularFire, AngularFireAuth, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {
  public authenticated = false;
  public displayName = "";

  constructor(
    private af: AngularFire
  ) { 
    this.af.auth.subscribe(auth => {
      
      if(auth){
        this.displayName = auth.auth.displayName;
        this.authenticated = true;        
      }else{
        this.authenticated = false;
      }
    });
    
  }

  getAuth(): AngularFireAuth{
    return this.af.auth;
  }

  isAuthenticated(): boolean{
    return this.authenticated;
  }

  login(email:string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({
      email: email,
      password: password
    }).then((authState) => {
      this.authenticated = true;
      
      this.displayName = authState.auth.displayName;
      return authState;
    });
    
  }

  logout(){
    this.authenticated = false;
    this.displayName = "";
    this.af.auth.logout();
  }

}
