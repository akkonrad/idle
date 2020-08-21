import { createSelector, Store } from '@ngrx/store';
import { AppState, TimeState } from './app.state';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const selectTime = (state: AppState) => state.time;

export const selectSeconds = createSelector(
    selectTime,
    (state: TimeState) => state.seconds
);

@Injectable()
export class SelectorsService {
    constructor(private store: Store<AppState>) { }

    selectSeconds(): Observable<number> {
        return this.store.select(selectSeconds);
    }
}
