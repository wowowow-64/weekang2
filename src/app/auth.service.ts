
import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, getRedirectResult, signInWithRedirect, signOut } from '@angular/fire/auth';
import { EMPTY, from, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);

  constructor() {
    getRedirectResult(this.auth).then(result => {
      if (result) {
        console.log('AuthService: Handled redirect result, user:', result.user);
      }
    }).catch(error => {
      console.error('AuthService: Error during getRedirectResult:', error);
    });
  }

  login() {
    console.log('AuthService: Preparing to sign in with Google redirect...');
    const provider = new GoogleAuthProvider();
    return from(signInWithRedirect(this.auth, provider)).pipe(
      catchError(err => {
        console.error('AuthService: Error during signInWithRedirect:', err);
        alert(`Login failed: ${err.message}`);
        return EMPTY;
      })
    );
  }

  logout() {
    return from(signOut(this.auth));
  }

  getUser() {
    return this.auth.currentUser;
  }
}
