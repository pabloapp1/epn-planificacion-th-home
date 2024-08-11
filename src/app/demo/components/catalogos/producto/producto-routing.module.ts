import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'actividad', data: { breadcrumb: 'Actividad' }, loadChildren: () => import('./actividad/actividad.module').then(m => m.ActividadModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
