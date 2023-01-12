import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointObserverService {
  breakpointObserver = new BehaviorSubject<string>('mobile');

  constructor() {}
}
