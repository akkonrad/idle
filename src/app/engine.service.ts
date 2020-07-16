import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';

import { TimeSecond, TimeMinute } from './store/time.actions';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  time$: Observable<number> = interval(1000);

  constructor(private store: Store) { }

  start(): void {
    let current = 0;
    this.time$.subscribe(() => {
      current++;
      this.store.dispatch(new TimeSecond());
      if (current % 60 === 0) {
        this.store.dispatch(new TimeMinute());
      }
    });
  }
}
