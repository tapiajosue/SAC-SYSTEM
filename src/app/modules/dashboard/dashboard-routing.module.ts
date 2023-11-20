import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { HomePageComponent } from '../home/pages/home-page/home-page.component';
import {
  ShareholdersPageComponent,
} from '../shareholders/pages/shareholders-page/shareholders-page.component';
import {
  TitlesPageComponent,
} from '../titles/pages/titles-page/titles-page.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {path: 'home', component: HomePageComponent},
      {path: 'accionistas', component:ShareholdersPageComponent},
      {path: 'titulos', component:TitlesPageComponent},
      {path: '**', redirectTo:'home'}
    ]
  },

]





@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

// dashboard distribuira a toda los modulos de la pagina
