import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'properties',
        loadChildren: () =>
          import('./pages/properties/properties.module').then(
            (m) => m.PropertiesModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./pages/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'listings',
        loadChildren: () =>
          import('./pages/listings/listings.module').then(
            (m) => m.ListingsModule
          ),
      },
      {
        path: 'agents',
        loadChildren: () =>
          import('./pages/agents/agents.module').then((m) => m.AgentsModule),
      },
      {
        path: 'compare',
        loadChildren: () =>
          import('./pages/compare/compare.module').then((m) => m.CompareModule),
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('./pages/pricing/pricing.module').then((m) => m.PricingModule),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./pages/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'terms-conditions',
        loadChildren: () =>
          import('./pages/terms-conditions/terms-conditions.module').then(
            (m) => m.TermsConditionsModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./pages/account/account.module').then((m) => m.AccountModule),
      },
      {
        path: 'submit-property',
        loadChildren: () =>
          import('./pages/submit-property/submit-property.module').then(
            (m) => m.SubmitPropertyModule
          ),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'forgotPassword',
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'resetPassword',
    loadChildren: () =>
      import('./pages/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordModule
      ),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
  { path: 'lock-screen', component: LockScreenComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
      initialNavigation: 'enabledBlocking', // for one load page, without reload
      // useHash: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
