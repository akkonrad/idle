import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Item } from '../types';
import { ItemClicked } from '../store/item.actions';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private store: Store<AppState>) { }

  handleClick(item: Item): void {
    this.store.dispatch(new ItemClicked(item));
  }
}
