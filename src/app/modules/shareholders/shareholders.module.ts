import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import {
  ShareholdersPageComponent,
} from './pages/shareholders-page/shareholders-page.component';

@NgModule({
  declarations: [
    ShareholdersPageComponent,

    CrudPageComponent,
    TablePageComponent,
    NewCrudPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    NzTableModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
  ],
  exports: [],
})
export class ShareholdersModule {}
