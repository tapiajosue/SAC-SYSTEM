import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { ShareholdersModule } from '../shareholders/shareholders.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
   DashboardComponent,
   HeaderComponent,
   FooterComponent,
   SidebarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareholdersModule,

    NzMenuModule,
    NzIconModule
  ],
  exports: [
    DashboardComponent,

  ]
})
export class DashboardModule { }
