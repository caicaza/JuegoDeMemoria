import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeQuieroJugarComponent } from './mode-quiero-jugar/mode-quiero-jugar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ModeRelaxComponent } from './mode-relax/mode-relax.component';
import {HashLocationStrategy,LocationStrategy} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    ModeQuieroJugarComponent,
    InicioComponent,
    ModeRelaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
