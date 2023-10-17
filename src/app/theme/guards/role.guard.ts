import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterState,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../../services/role.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private role: RoleService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url = state.url;
    return true;
    // TODO layout the guard for pages, base on the role.

    //   this.role.IsSONA() &&
    //   (url.indexOf('sona') > -1 || url.indexOf('company') > -1)
    // ) {
    //   return true;
    // } else if (
    //   this.role.IsProcessors() &&
    //   (url.indexOf('processors') > -1 || url.indexOf('company') > -1)
    // ) {
    //   return true;
    // } else if (this.role.IsProcessors() && url.indexOf('processors') > -1) {
    //   this.router.navigate(['/processors']);
    //   return false;
    // } else if (
    //   ((this.role.IsSTAE() || this.role.IsSTBDR()) &&
    //     url.indexOf('sales') > -1) ||
    //   url.indexOf('company') > -1
    // ) {
    //   if (
    //     (this.role.IsSTAE() || this.role.IsSTBDR()) &&
    //     (url.indexOf('dashboard') > -1 || url.indexOf('csmcompanies') > -1)
    //   ) {
    //     this.router.navigate(['/sales']);
    //     return false;
    //   }
    //   return true;
    // } else if (this.role.IsPartner() || this.role.IsPartnerManager()) {
    //   if (url.indexOf('partnercompanies') > -1) {
    //     return true;
    //   } else {
    //     this.router.navigate(['/partnercompanies']);
    //     return false;
    //   }
    // } else {
    //   this.router.navigate(['/dashboard']);
    //   return false;
    // }
  }
}
