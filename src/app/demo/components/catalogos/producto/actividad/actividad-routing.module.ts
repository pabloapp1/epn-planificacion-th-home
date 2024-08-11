import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActividadTableComponent} from "./actividad-table/actividad-table.component";

const routes: Routes = [
    { path: '', component: ActividadTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
