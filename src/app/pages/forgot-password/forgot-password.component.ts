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
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
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
      rememberMe: false,
    });
    // this.emailListner();
  }

  public onLoginFormSubmit(values: Object): void {
    if (this.loginForm.valid) {
      // this.router.navigate(['/dashboard']);
    }
  }

  public onMsLogin(): void {
    console.log('implement the MS login');
  }
}
