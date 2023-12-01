import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  ShareholdersPageComponent,
} from './pages/shareholders-page/shareholders-page.component';
import { TypeAccComponent } from './pages/type-acc/type-acc.component';
import { TypeDocComponent } from './pages/type-doc/type-doc.component';
import { TypeStateComponent } from './pages/type-state/type-state.component';

const routes: Routes = [
   {
     path: '',
     component: ShareholdersPageComponent,
     children:[
       {path: 'tipo doc', component: TypeDocComponent},
       {path: 'tipo acc', component:TypeAccComponent},
       {path: 'tipo estado', component:TypeStateComponent},
       {path: '**', redirectTo:''}
     ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareholdersRoutingModule { }
