import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GridBasicsComponent} from "./grid-basics/grid-basics.component";
import {GridLayoutComponent} from "./grid-layout/grid-layout.component";
import {ImpliciteComponent} from "./implicite/implicite.component";
import {MinmaxComponent} from "./minmax/minmax.component";

const routes: Routes = [
  { path: 'basics', component: GridBasicsComponent },
  { path: 'layout', component: GridLayoutComponent },
  { path: 'implicite', component: ImpliciteComponent },
  { path: 'minmax', component: MinmaxComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
