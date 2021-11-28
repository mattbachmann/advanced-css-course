import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VarsNestingComponent } from './vars-nesting/vars-nesting.component';
import { HomeComponent } from './home/home.component';
import { MixinsExtendsFuncsComponent } from './mixins-extends-funcs/mixins-extends-funcs.component';

@NgModule({
  declarations: [
    AppComponent,
    VarsNestingComponent,
    HomeComponent,
    MixinsExtendsFuncsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
