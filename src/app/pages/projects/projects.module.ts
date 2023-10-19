import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from '../../shared/shared.module';

import { PropertyComponent } from './property/property.component';
import { ProjectsComponent } from './projects.component';

export const routes: Routes = [
  { path: '', component: ProjectsComponent, pathMatch: 'full' },
  { path: ':id', component: PropertyComponent },
];

@NgModule({
  declarations: [PropertyComponent, ProjectsComponent],
  exports: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule,
    SharedModule,
  ],
})
export class ProjectsModule {}
