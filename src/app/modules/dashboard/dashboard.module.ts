import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgzorroModule } from 'src/app/shared/ngzorro.module.ts/ngzorro.module';

import { HomeModule } from '../home/home.module';
import { ShareholdersModule } from '../shareholders/shareholders.module';
import { TitlesModule } from '../titles/titles.module';
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
    HomeModule,
    TitlesModule,

NgzorroModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
