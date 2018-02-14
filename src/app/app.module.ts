import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { MonthSelectComponent } from './month-select/month-select.component';
import { StudentSelectComponent } from './student-select/student-select.component';
import { AttendComponent } from './attend/attend.component';
import { ChimeComponent } from './chime/chime.component';
import { SelectFunctionComponent } from './select-function/select-function.component';
import { OperationComponent } from './operation/operation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonthSelectComponent,
    StudentSelectComponent,
    AttendComponent,
    ChimeComponent,
    SelectFunctionComponent,
    OperationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpModule,
    FormsModule,
    Routing,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
