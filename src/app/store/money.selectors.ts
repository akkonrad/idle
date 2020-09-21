import { createSelector, Store } from '@ngrx/store';
import { AppState, MoneyState, TimeState } from './app.state';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const selectMoney = (state: AppState) => state.money;

@Injectable()
export class MoneySelectorsService {
    constructor(private store: Store<AppState>) { }

    selectMoney(): Observable<MoneyState> {
        return this.store.select(selectMoney);
    }
}
