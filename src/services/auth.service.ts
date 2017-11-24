import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService{
    isAuthenticated: boolean = false;
    user$: Observable<firebase.User>;

    constructor(private afAuth : AngularFireAuth){
        this.user$ = afAuth.authState;
    }
    
    
    
    singup(email: string, password: string){
        return firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    signin(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }

    signinWhitgGoogle(){        
        let googleProvide = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithRedirect(googleProvide);
    }

    signinWithFacebook(){
        let facebookProvide = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithRedirect(facebookProvide).then(function() {
            firebase.auth().getRedirectResult()
          });
        
        
    }

    logout(){
        firebase.auth().signOut();
    }


    getActiveUser(){
        return firebase.auth().currentUser;
    }
}