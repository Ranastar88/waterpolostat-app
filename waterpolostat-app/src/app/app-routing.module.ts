import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditStatComponent } from './partita/edit-stat/edit-stat.component';
import { ListPartiteComponent } from './partita/list-partite/list-partite.component';
import { NewEditPartitaComponent } from './partita/new-edit-partita/new-edit-partita.component';

const routes: Routes = [
  { path: 'partita/edit-stat/:id', component: EditStatComponent },
  { path: 'partita/elenco', component: ListPartiteComponent },
  { path: 'partita/nuova', component: NewEditPartitaComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
