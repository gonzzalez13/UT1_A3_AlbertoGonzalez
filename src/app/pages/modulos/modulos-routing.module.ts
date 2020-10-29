import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulosPage } from './modulos.page';

const routes: Routes = [
  {
    path: '',
    component: ModulosPage,
    children: [
      {
        path: 'dam1',
        loadChildren: () => import('../dam1/dam1.module').then( m => m.DAM1PageModule)
      },
      {
        path: 'dam2',
        loadChildren: () => import('../dam2/dam2.module').then( m => m.DAM2PageModule)
      },
      {
        path: 'fct',
        loadChildren: () => import('../fct/fct.module').then( m => m.FCTPageModule)
      }
    ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulosPageRoutingModule {}
