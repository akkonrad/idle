import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { EngineService } from './engine.service';
import { ValueDisplayComponent } from './components/value-display/value-display.component';
import { reducer } from './store/time.reducers';
import { reducer as moneyReducer } from './store/money.reducers';
import { SelectorsService } from './store/time.selectors';
import { ItemComponent } from './components/item/item.component';
import { MoneySelectorsService } from './store/money.selectors';

@NgModule({
  declarations: [
    AppComponent,
    ValueDisplayComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      time: reducer,
      money: moneyReducer
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [EngineService, SelectorsService, MoneySelectorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
