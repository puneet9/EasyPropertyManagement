import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApiClientModule } from './api/client/api-client.module';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties.component';
import { UnitComponent } from './units.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { routing } from './app.routing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    UnitComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ApiClientModule.forRoot(),
    routing,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
