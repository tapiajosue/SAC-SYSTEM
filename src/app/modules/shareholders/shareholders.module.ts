import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';

import { CrudPageComponent } from './components/crud-page/crud-page.component';
import {
  NewCrudPageComponent,
} from './components/new-crud-page/new-crud-page.component';
import {
  TablePageComponent,
} from './components/table-page/table-page.component';
import { AdminAccComponent } from './pages/admin-acc/admin-acc.component';
import {
  ShareholdersPageComponent,
} from './pages/shareholders-page/shareholders-page.component';
import { TypeAccComponent } from './pages/type-acc/type-acc.component';
import { TypeDocComponent } from './pages/type-doc/type-doc.component';
import { TypeStateComponent } from './pages/type-state/type-state.component';

@NgModule({
  declarations: [
    ShareholdersPageComponent,

    CrudPageComponent,
    TablePageComponent,
    NewCrudPageComponent,

    TypeAccComponent,
    TypeDocComponent,
    TypeStateComponent,
    AdminAccComponent,


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,

    NzTableModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
  ],
  exports: [],
})
export class ShareholdersModule {}
