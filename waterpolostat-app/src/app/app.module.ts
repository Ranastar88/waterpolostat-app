import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuovaPartitaComponent } from './partita/nuova-partita/nuova-partita.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LineupComponent } from './shared/models/lineup/lineup.component';

@NgModule({
  declarations: [
    AppComponent,
    NuovaPartitaComponent,
    DashboardComponent,
    LineupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
