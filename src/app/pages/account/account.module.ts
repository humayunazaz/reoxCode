import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { InputFileModule } from 'src/app/theme/components/input-file/input-file.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { TeamsComponent } from './teams/teams.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'my-properties', component: MyPropertiesComponent },
      { path: 'my-properties/:id', component: EditPropertyComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'teams', component: TeamsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    MyPropertiesComponent,
    FavoritesComponent,
    ProfileComponent,
    EditPropertyComponent,
    TeamsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    InputFileModule,
    GoogleMapsModule,
  ],
})
export class AccountModule {}
