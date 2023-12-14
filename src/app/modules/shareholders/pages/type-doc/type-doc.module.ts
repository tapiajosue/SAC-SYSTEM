import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  RouterModule,
  RouterOutlet,
  Routes,
} from '@angular/router';

import { NgzorroModule } from 'src/app/shared/ngzorro.module.ts/ngzorro.module';

import { TypeDocComponent } from './type-doc.component';

const routes: Routes = [
  { path: '', component: TypeDocComponent },
];
@NgModule({
  declarations: [
    TypeDocComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    FormsModule,
    RouterModule,
    RouterModule.forChild(routes),

    //el modulo NgZorroModule tiene importado ya los modulos de ngzorro, y si necesitamos otro solo hay que cargarlo en el modulo
    NgzorroModule

  ],
  exports: [

  ],
})
export class TypeDocModule { }
