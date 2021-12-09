import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridBasicsComponent } from './grid-basics/grid-basics.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    GridBasicsComponent,
    GridLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
