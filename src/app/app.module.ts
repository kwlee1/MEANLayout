import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms'; //newly added
import { HttpModule } from '@angular/http'; //newly added

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //newly added
    HttpModule //newly added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
