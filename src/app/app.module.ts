import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LogicComponent } from './logic/logic.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TimelineComponent,
    LogicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
