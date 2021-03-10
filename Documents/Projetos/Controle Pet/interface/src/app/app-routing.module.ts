import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoricoComponent } from './historico/historico.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [

{ path: '', component: HomeComponent},
{ path: 'historico', component: HistoricoComponent},
{ path: 'detalhes', component: DetalhesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
