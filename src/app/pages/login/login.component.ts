import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: UntypedFormGroup;
  public hide = true;
  public isInternalUser: boolean = false;
  constructor(public fb: UntypedFormBuilder, public router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      rememberMe: false,
    });
    this.emailListner();
  }

  public onLoginFormSubmit(values: Object): void {
    if (this.loginForm.valid) {
      this.router.navigate(['/dashboard']);
    }
  }

  public onMsLogin(): void {
    console.log('implement the MS login');
  }

  private emailListner(): void {
    this.loginForm.controls['username'].valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((enteredEmail: string) => {
        if (enteredEmail.includes('@stentam.com')) {
          this.isInternalUser = true;
          this.internalUserFormHandler(true);
        } else {
          if (this.isInternalUser) {
            this.internalUserFormHandler(false);
          }
          this.isInternalUser = false;
        }
      });
  }

  private internalUserFormHandler(showOutlook: boolean): void {
    if (showOutlook) {
      this.loginForm.removeControl('password');
    } else {
      this.loginForm.addControl(
        'password',
        new FormControl(
          null,
          Validators.compose([Validators.required, Validators.minLength(6)])
        )
      );
    }
  }
}
