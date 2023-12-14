import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { TitlesPageComponent } from './pages/titles-page/titles-page.component';

const routes: Routes = [
  {
    path: '',
    component: TitlesPageComponent,
    children:[
      {path: 'admin', loadChildren: () => import('./pages/admin-title/admin-title.module').then(m => m.AdminTitleModule) },
      {path: 'tipo-transferencia', loadChildren: () => import('./pages/type-transfer/type-transfer.module').then(m => m.TypeTransferModule) },
      {path: 'impresion', loadChildren: () => import('./pages/print-title/print-title.module').then(m => m.PrintTitleModule) },
      {path: 'traspaso', loadChildren: () => import('./pages/type-transfer/type-transfer.module').then(m => m.TypeTransferModule) },
      {path: '**', redirectTo:''}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitlesRoutingModule { }
