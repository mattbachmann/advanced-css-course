import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VarsNestingComponent} from "./vars-nesting/vars-nesting.component";
import {HomeComponent} from "./home/home.component";
import {MixinsExtendsFuncsComponent} from "./mixins-extends-funcs/mixins-extends-funcs.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vars', component: VarsNestingComponent },
  { path: 'mixins', component: MixinsExtendsFuncsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
