import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValueDisplayComponent } from './components/value-display/value-display.component';
import { EngineService } from './engine.service';

@NgModule({
  declarations: [
    AppComponent,
    ValueDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
