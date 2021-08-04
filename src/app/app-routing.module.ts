import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonnagesComponent} from "./personnages/personnages.component";
import {PersonnageComponent} from "./personnage/personnage.component";

const routes: Routes = [{path:"personnages", component: PersonnagesComponent},
  {path:"personnages/:id", component: PersonnageComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
