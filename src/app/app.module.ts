import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { EngineService } from './engine.service';
import { ValueDisplayComponent } from './components/value-display/value-display.component';
import { reducer } from './store/time.reducers';
import { SelectorsService } from './store/time.selectors';

@NgModule({
  declarations: [
    AppComponent,
    ValueDisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      time: reducer
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [EngineService, SelectorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
