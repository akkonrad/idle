import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Color } from './types';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  COLOR = Color;

  time = 0;

  subscriptions: Subscription[] = [];

  constructor(private engine: EngineService) {
    this.engine.start();
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
