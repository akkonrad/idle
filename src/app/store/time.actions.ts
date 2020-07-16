import { Action } from '@ngrx/store';

export const TIME_SECOND = '[TIME] second';
export const TIME_MINUTE = '[TIME] minute';

export class TimeSecond implements Action {
    readonly type = TIME_SECOND;
    constructor() { }
}

export class TimeMinute implements Action {
    readonly type = TIME_MINUTE;
    constructor() { }
}

export type Actions = TimeSecond | TimeMinute;
