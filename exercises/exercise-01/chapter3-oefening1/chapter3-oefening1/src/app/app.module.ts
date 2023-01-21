import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponentComponent } from './components/logo-component/logo-component.component';
import { NieuwsbriefComponentComponent } from './components/nieuwsbrief-component/nieuwsbrief-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponentComponent,
    NieuwsbriefComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
