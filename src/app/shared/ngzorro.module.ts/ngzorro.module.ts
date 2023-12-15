// en este modulo importaremos todos los modulos de ng zorro para evitar que se dupliquen, de esta manera solo cargaremos este modulo.

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

const ngZorroModules = [
  NzButtonModule,
  NzInputModule,
  NzTableModule,
  NzTableModule,
  NzInputModule,
  NzMenuModule,
  NzIconModule,
  NzDividerModule,
  NzModalModule,
  NzLayoutModule,
  NzFormModule,
  NzToolTipModule,
  NzSelectModule,
  NzCardModule,
  NzAvatarModule,
NzDropDownModule,
  // Agrega otros módulos aquí
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ngZorroModules],
  exports: [ngZorroModules],
})
export class NgzorroModule {}
