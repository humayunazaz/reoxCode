import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  private get(key: string): string {
    var value = localStorage.getItem(key);
    if (value) {
      return value;
    }
    return '';
  }

  private remove(key: string): void {
    localStorage.removeItem(key);
  }
}
