import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewEditPartitaComponent } from './partita/new-edit-partita/new-edit-partita.component';
import { EditLineupComponent } from './partita/edit-lineup/edit-lineup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewEditPartitaComponent,
    EditLineupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    EditLineupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
