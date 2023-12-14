import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';

import { TitlesPageComponent } from './pages/titles-page/titles-page.component';
import { TitlesRoutingModule } from './titles.routing.module';

@NgModule({
  declarations: [
    TitlesPageComponent,
  ],
  imports: [
    TitlesRoutingModule,
    CommonModule,

    NzTableModule,
    NzInputModule,
    NzMenuModule,
  ],
  exports: [
    TitlesPageComponent,
  ]
})
export class TitlesModule { }
