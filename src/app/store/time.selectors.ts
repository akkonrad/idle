import { createSelector } from '@ngrx/store';
import { AppState, TimeState } from './app.state';

export const selectTime = (state: AppState) => state.time;

export const selectSeconds = createSelector(
    selectTime,
    (state: TimeState) => state.seconds
);
