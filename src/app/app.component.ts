import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Color } from './types';
import { EngineService } from './engine.service';
import { TimeService } from './services/time.service';
import { SelectorsService } from './store/time.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  COLOR = Color;

  time: number;

  subscriptions: Subscription[] = [];

  constructor(private engine: EngineService, private selectors: SelectorsService) {
    this.engine.start();
  }

  ngOnInit(): void {
    this.subscriptions.push(this.selectors.selectSeconds().subscribe(time => this.time = time));
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
