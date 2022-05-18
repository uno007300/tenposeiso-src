import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public selectedServiceBehavior = new BehaviorSubject<string>('tab-1');
  constructor() { }
}
