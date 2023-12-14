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

import { PrintTitleComponent } from './print-title.component';

const routes: Routes = [{ path: '', component: PrintTitleComponent }];
@NgModule({
  declarations: [
    PrintTitleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    FormsModule,
    RouterModule,
    RouterModule.forChild(routes),

    NgzorroModule,
  ],
  exports: [],
})
export class PrintTitleModule {}
