import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridBasicsComponent } from './grid-basics/grid-basics.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { ImpliciteComponent } from './implicite/implicite.component';
import { MinmaxComponent } from './minmax/minmax.component';

@NgModule({
  declarations: [
    AppComponent,
    GridBasicsComponent,
    GridLayoutComponent,
    ImpliciteComponent,
    MinmaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
