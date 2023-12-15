import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  CrudPageComponent,
} from './pages/admin-acc/components/crud-page/crud-page.component';
import {
  NewCrudPageComponent,
} from './pages/admin-acc/components/new-crud-page/new-crud-page.component';
import {
  ShareholdersPageComponent,
} from './pages/shareholders-page/shareholders-page.component';
import { TypeStateComponent } from './pages/type-state/type-state.component';

const routes: Routes = [
   {
     path: '',
     component: ShareholdersPageComponent,
     children:[

       {path: 'admin', loadChildren: () => import('./pages/admin-acc/admin-acc.module').then(m => m.AdminAccModule) },
       {path: 'tipodoc', loadChildren: () => import('./pages/type-doc/type-doc.module').then(m => m.TypeDocModule) },
       {path: 'tipoacc', loadChildren: () => import('./pages/type-acc/type-acc.module').then(m => m.TypeAccModule) },
       {path: 'estado', component:TypeStateComponent},


       //no funciono cargar la pagina asi
       {path: 'crudpage', component:CrudPageComponent},
       {path: 'newcrud', component:NewCrudPageComponent},
       {path: '**', redirectTo:''}
     ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareholdersRoutingModule { }
