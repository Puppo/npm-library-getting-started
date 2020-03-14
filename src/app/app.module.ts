import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LdpLibraryModule } from 'ldp-library'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LdpLibraryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
