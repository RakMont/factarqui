import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddclientComponent } from './components/facturador/addclient/addclient.component';
import { ShowfactComponent } from './components/facturador/showfact/showfact.component';

@NgModule({
  declarations: [
    AppComponent,
    AddclientComponent,
    ShowfactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
