import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from '../../shared/shared.module';

import { PropertyComponent } from './property/property.component';
import { ListingsComponent } from './listings.component';
import { ListingComponent } from './listing/listing.component';

export const routes: Routes = [
  { path: '', component: ListingsComponent, pathMatch: 'full' },
  { path: ':id', component: ListingComponent },
];

@NgModule({
  declarations: [PropertyComponent, ListingsComponent, ListingComponent],
  exports: [ListingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule,
    SharedModule,
  ],
})
export class ListingsModule {}
