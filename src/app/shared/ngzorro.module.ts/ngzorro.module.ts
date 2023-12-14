// en este modulo importaremos todos los modulos de ng zorro para evitar que se dupliquen, de esta manera solo cargaremos este modulo.

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';

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
  // Agrega otros módulos aquí
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ngZorroModules,

  ],
  exports: [
    ngZorroModules
  ]
})
export class NgzorroModule { }
