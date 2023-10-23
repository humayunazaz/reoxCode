import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password.component';

export const routes: Routes = [
  { path: '', component: ForgotPasswordComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ForgotPasswordModule {}
