import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Color, Item } from './types';
import { EngineService } from './engine.service';
import { SelectorsService } from './store/time.selectors';
import { MoneySelectorsService } from './store/money.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  COLOR = Color;

  time: number;
  money: number;

  subscriptions: Subscription[] = [];

  items: Item[] = [{
    label: '💲 Small income',
    baseValue: 10,
    refresh: 1
  }, {
    label: '💰 Better income',
    baseValue: 50,
    refresh: 3
  },
  {
    label: '💵 The best income',
    baseValue: 200,
    refresh: 10
  }];

  constructor(private engine: EngineService,
    private selectors: SelectorsService,
    private moneySelectors: MoneySelectorsService) {
    this.engine.start();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.selectors.selectSeconds().subscribe(time => this.time = time),
      this.moneySelectors.selectMoney().subscribe(money => this.money = money.ballance)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
