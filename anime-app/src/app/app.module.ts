import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {PanelModule} from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    CardModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
