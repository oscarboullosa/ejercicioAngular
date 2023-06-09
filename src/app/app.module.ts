import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DeleteAllComponent } from './delete-all/delete-all.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CabeceraComponent,
    DeleteAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
