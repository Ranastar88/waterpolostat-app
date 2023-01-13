import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewEditPartitaComponent } from './partita/new-edit-partita/new-edit-partita.component';

const routes: Routes = [
  { path: 'partita/nuova', component: NewEditPartitaComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
