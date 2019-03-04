import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentReaderComponent} from './content-reader/content-reader.component';
import {ScrollingModule} from '@angular/cdk-experimental/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentReaderComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
