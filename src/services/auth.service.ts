import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService{
    constructor(
        public firebase: AngularFireAuth
    ){}
    
    isAuthenticated: boolean = false;
    user$: Observable<firebase.User>;

    constructor(private afAuth : AngularFireAuth){
        this.user$ = afAuth.authState;
    }
    
    
    
    singup(email: string, password: string){
        return this.firebase.auth.createUserWithEmailAndPassword(email,password);
    }

    signin(email: string, password: string){
        return this.firebase.auth.signInWithEmailAndPassword(email,password);
    }

    signinWhitgGoogle(){        
        
        return this.firebase.auth.signInWithRedirect(new fire.auth.GoogleAuthProvider());
    }

    signinWithFacebook(){
        return this.firebase.auth.signInWithRedirect(new fire.auth.FacebookAuthProvider()).then(function() {
            this.firebase.auth.getRedirectResult()
          });
        
        
        
    }

    logout(){
        this.firebase.auth.signOut();
    }


    getActiveUser(){
        return this.firebase.auth.currentUser;
    }
}