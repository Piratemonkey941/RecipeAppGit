import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenExpirationTimer: any;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}

//   // firebaseAPIKey
// //============================================

//   signup(email: string, password: string){
//     return this.http
//     .post<AuthResonseData>(
//       'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
//       {
//         email: email,
//         password: password,
//         returnSecureToken: true
//       }
//       )
//       .pipe(
//         catchError(this.handleError),
//         tap(resData => {
//           this.handleAuthentication(
//             resData.email,
//             resData.localId,
//             resData.idToken,
//             +resData.expiresIn
//             )
//       })
//     );
//   }

// //===========================================

//   login(email: string, password: string){
//     return this.http
//     .post<AuthResonseData>(
//       'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
//        {
//         email: email,
//         password: password,
//         returnSecureToken: true
//       }
//     )
//     .pipe(
//       catchError(this.handleError),
//       tap(resData => {
//         this.handleAuthentication(resData.email,
//           resData.localId,
//           resData.idToken,
//           +resData.expiresIn
//           )
//       }));
//   }

// //============================================

// autoLoggin() {
//   const userData:{
//     email: string;
//     id: string;
//     _token: string;
//     _tokenExpirationDate: string;

//   } =  JSON.parse(localStorage.getItem('userData'));
//   if(!userData) {
//     return;
//   }

//   const loadedUser = new User(
//        userData.email,
//        userData.id,
//        userData._token,
//        new Date(userData._tokenExpirationDate)
//     );
//     if(loadedUser.token) {

//       this.user.next(loadedUser);
//       const expirationDuration =
//               new Date(userData._tokenExpirationDate).getTime() -
//               new Date().getTime()
//       this.autoLogout(expirationDuration)

//     }
// }

// //============================================

// logout() {
//   this.user.next(null);
//   this.router.navigate(['/auth']);
//   localStorage.removeItem('userData');
//   if(this.tokenExpirationTimer) {
//     clearTimeout(this.tokenExpirationTimer);
//   }
//   this.tokenExpirationTimer = null;
// }

// //============================================

// autoLogout(expirationDuration: number){
//   this.tokenExpirationTimer =  setTimeout(() => {
//     this.logout();
//   }, expirationDuration);
// }

// //============================================

//   private handleAuthentication(
//     email: string,
//     userId: string,
//     token: string,
//     expiresIn: number
//     ) {
//     const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
//     const user = new User(
//       email,
//       userId,
//       token,
//       expirationDate
//       );
//       this.user.next(user);
//       this.autoLogout(expiresIn * 1000)
//       localStorage.setItem('userData', JSON.stringify(user));
//   }

// //============================================

//   private handleError(errorRes: HttpErrorResponse) {
//     let errorMessage = 'An unknown error occured';
//         if(!errorRes.error || !errorRes.error.error) {
//           return throwError(errorMessage);
//         }
//         switch(errorRes.error.error.message) {
//         case 'EMAIL_EXIST':
//           errorMessage = 'This email exists already.'
//           break;
//         case 'EMAIL_NOT_FOUND':
//           errorMessage = 'This email does not exists .'
//           break;
//         case 'INVALID_PASSWORD':
//           errorMessage = 'This password is not correct.'
//           break;
//           // this.error = 'An Error Occured'
//         }
//         return throwError(errorMessage);
//       }

// }




// // https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
