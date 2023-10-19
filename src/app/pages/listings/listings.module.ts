import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from '../../shared/shared.module';

import { PropertyComponent } from './property/property.component';
import { ListingsComponent } from './listings.component';

export const routes: Routes = [
  { path: '', component: ListingsComponent, pathMatch: 'full' },
  { path: ':id', component: PropertyComponent },
];

@NgModule({
  declarations: [PropertyComponent, ListingsComponent],
  exports: [ListingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule,
    SharedModule,
  ],
})
export class ListingsModule {}
