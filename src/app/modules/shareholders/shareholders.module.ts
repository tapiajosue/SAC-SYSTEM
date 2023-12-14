import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { NgzorroModule } from 'src/app/shared/ngzorro.module.ts/ngzorro.module';

import {
  CrudPageComponent,
} from './pages/admin-acc/components/crud-page/crud-page.component';
import {
  NewCrudPageComponent,
} from './pages/admin-acc/components/new-crud-page/new-crud-page.component';
import {
  TablePageComponent,
} from './pages/admin-acc/components/table-page/table-page.component';
import {
  ShareholdersPageComponent,
} from './pages/shareholders-page/shareholders-page.component';
import { TypeStateComponent } from './pages/type-state/type-state.component';
import { ShareholdersRoutingModule } from './shareholders-routing.module';

@NgModule({
  declarations: [
    ShareholdersPageComponent,

    CrudPageComponent,
    TablePageComponent,
    NewCrudPageComponent,


    TypeStateComponent,





  ],
  // no olvides importar el routing para que todo funcione
  imports: [
    ShareholdersRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    FormsModule,
NgzorroModule,



  ],
  exports: [
ShareholdersPageComponent
  ],
})
export class ShareholdersModule {}
