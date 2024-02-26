import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewEditPartitaComponent } from './partita/new-edit-partita/new-edit-partita.component';
import { ListPartiteComponent } from './partita/list-partite/list-partite.component';
import { EditStatComponent } from './partita/edit-stat/edit-stat.component';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DatabaseService } from './shared/services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewEditPartitaComponent,
    ListPartiteComponent,
    EditStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initDatabase,
      multi: true,
      deps: [
        /* your dependencies */
      ],
    },
    DatabaseService,
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
