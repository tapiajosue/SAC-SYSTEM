import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { CrudPageComponent } from './components/crud-page/crud-page.component';

const routes: Routes = [
  {
    path: 'crud1',
    component: CrudPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareholdersRoutingModule { }
