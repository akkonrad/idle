import { Action } from '@ngrx/store';
import { Item } from '../types/';

export const ITEM_CLICKED = '[ITEM] clicked';

export class ItemClicked implements Action {
    readonly type = ITEM_CLICKED;
    constructor(public item: Item) { }
}

export type Actions = ItemClicked;
