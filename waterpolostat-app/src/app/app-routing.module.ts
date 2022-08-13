import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NuovaPartitaComponent } from './partita/nuova-partita/nuova-partita.component';

const routes: Routes = [
  { path: 'partita/nuova', component: NuovaPartitaComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
