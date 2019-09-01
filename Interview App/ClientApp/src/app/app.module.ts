import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsService } from './_services/person.service';
import { DepartmentsService } from './_services/department.service';
import { PersonComponent } from './persons/persons.component';
import { DepartmentComponent } from './departments/department.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './app.config';
import { CreateComponent } from './persons/Create/create.component';
import { EditComponent } from './persons/Edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    DepartmentComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonsService,DepartmentsService,AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
