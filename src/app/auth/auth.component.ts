import { Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResonseData, AuthService } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
  ngOnInit(): void {
  }

  isLoggedInMode = true;
  isLoading = false;
  error: string = null

  @ViewChild(PlaceHolderDirective, {static: false}) alertHost: PlaceHolderDirective;

  private closeSub: Subscription

  constructor(
    private authService: AuthService,
    private router: Router,
    private componantFactoryResolver: ComponentFactoryResolver) { }

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
            this.showWrrorAlert(errorMessage);
            this.isLoading = false;
          }
        );

      form.reset();
    }

    onHandleError(){
      this.error = null
    }

    ngOnDestroy(): void {
        if(this.closeSub) {
          this.closeSub.unsubscribe();
        }
    }

    private showWrrorAlert(message:string) {
     const alertCmpFactory = this.componantFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef
      hostViewContainerRef.clear();

      const componantRef = hostViewContainerRef.createComponent(alertCmpFactory);

      componantRef.instance.message = message;
      this.closeSub = componantRef.instance.close.subscribe(() => {
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
      });
    }



}
