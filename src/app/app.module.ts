import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routing } from './app.routing';
import { ButtonsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
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
    AdminComponent,
    MonthSelectComponent,
    StudentSelectComponent,
    AttendComponent,
    ChimeComponent,
    SelectFunctionComponent,
    OperationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
