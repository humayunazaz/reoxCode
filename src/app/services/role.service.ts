import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor() {}
  Role: string = 'User';

  IsDev(): boolean {
    return this.Role.indexOf('Dev') > -1 ? true : false;
  }

  IsAdmin(): boolean {
    return this.Role.indexOf('Admin') > -1 ? true : false;
  }

  IsUser(): boolean {
    return this.Role.indexOf('User') > -1 ? true : false;
  }

  // IsSTManager() {
  //   return this.Role.indexOf('ST-Manager') > -1 ? true : false;
  // }

  // IsSTCSM() {
  //   return this.Role.indexOf('ST-CSM') > -1 ? true : false;
  // }

  // IsPartnerManager() {
  //   return this.Role.indexOf('Partner-Manager') > -1 ? true : false;
  // }

  // IsSONA() {
  //   return this.Role.indexOf('SONA') > -1 ? true : false;
  // }

  // IsProcessors() {
  //   return this.Role.indexOf('Processors') > -1 ? true : false;
  // }

  // IsPracticeSupport() {
  //   return this.Role.indexOf('Practice-Support') > -1 ? true : false;
  // }

  // IsSTAE() {
  //   return this.Role.indexOf('ST-AE') > -1 ? true : false;
  // }

  // IsSTBDR() {
  //   return this.Role.indexOf('ST-BDR') > -1 ? true : false;
  // }

  // IsViewer() {
  //   return this.Role.indexOf('Viewer') > -1 ? true : false;
  // }

  // IsPartner() {
  //   return this.Role.indexOf('Partner') > -1 ? true : false;
  // }
}
