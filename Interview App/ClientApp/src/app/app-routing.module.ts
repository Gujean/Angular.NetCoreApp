import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './departments/department.component';
import { PersonComponent } from './persons/persons.component';
import { CreateComponent } from './persons/Create/create.component';
import { EditComponent } from './persons/Edit/edit.component';


const routes: Routes = [
  
  { path: 'person', component: PersonComponent},
  { path: 'department', component: DepartmentComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: '', component: PersonComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
