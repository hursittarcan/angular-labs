import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfessionItemComponent } from './confession-item/confession-item.component';
import { AddConfessionComponent } from './components/add-confession/add-confession.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfessionItemComponent,
    AddConfessionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
