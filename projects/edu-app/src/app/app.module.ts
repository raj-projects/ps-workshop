import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EduLibModule } from 'projects/edu-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EduLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
