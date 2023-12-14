import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      { path:'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomeModule)},
      { path:'accionistas',
        loadChildren: () => import('../shareholders/shareholders.module').then( m => m.ShareholdersModule)},
      { path:'titulos',
        loadChildren: () => import('../titles/titles.module').then( m => m.TitlesModule)},


      // {path: 'home', component: HomePageComponent},
      // {path: 'accionistas', component:ShareholdersPageComponent},
      // {path: 'titulos', component:TitlesPageComponent},
      // {path: '**', redirectTo:'home'}
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
