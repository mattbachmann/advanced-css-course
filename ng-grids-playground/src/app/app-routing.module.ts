import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GridBasicsComponent} from "./grid-basics/grid-basics.component";
import {GridLayoutComponent} from "./grid-layout/grid-layout.component";

const routes: Routes = [
  { path: 'basics', component: GridBasicsComponent },
  { path: 'layout', component: GridLayoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
