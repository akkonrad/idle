import { Injectable } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  time$: Observable<number> = interval(1000);

  constructor() { }
}
