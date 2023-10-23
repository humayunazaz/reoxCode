import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from '../../shared/shared.module';

import { PropertyComponent } from './property/property.component';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
  { path: '', component: ProjectsComponent, pathMatch: 'full' },
  { path: ':id', component: ProjectComponent },
];

@NgModule({
  declarations: [PropertyComponent, ProjectsComponent, ProjectComponent],
  exports: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule,
    SharedModule,
  ],
})
export class ProjectsModule {}
