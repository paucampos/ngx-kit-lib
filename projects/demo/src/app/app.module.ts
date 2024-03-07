import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxHighlightModule } from 'ngx-kit-pau';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxHighlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
