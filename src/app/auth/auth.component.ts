import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResonseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoggedInMode = true;
  isLoading = false;
  error: string = null

  constructor(private authService: AuthService, private router: Router ) { }

  onSwitchedMode() {
    this.isLoggedInMode = !this.isLoggedInMode
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }
    const email= form.value.email
    const password= form.value.password

    this.isLoading = true;
    let authObs: Observable<AuthResonseData>;

    if(this.isLoggedInMode) {
     authObs =  this.authService.login(email, password)
    } else {

      authObs = this.authService.signup(email, password)
      }

      authObs.subscribe(
        resData => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
          },
          errorMessage => {
            console.log(errorMessage)

            this.error = errorMessage;
            this.isLoading = false;
          }
        );

      form.reset();
    }





  ngOnInit(): void {
  }

}
