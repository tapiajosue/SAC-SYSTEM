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

import { TypeTransferComponent } from './type-transfer.component';

const routes: Routes = [{ path: '', component: TypeTransferComponent }];
@NgModule({
  declarations: [TypeTransferComponent],
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
export class TypeTransferModule {}
