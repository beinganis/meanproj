import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import {ProfilepComponent} from './profilep/profilep.component';
  import { SubdepmasetrComponent } from './subdepartment/subdepartmentmaster/subdepartmentmaster.component';
  import {SubdepartmentComponent} from './subdepartment/subdepartment.component';
import { LogoutComponent } from './logout/logout.component';



const routes: Routes = [

  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'profilep',
    component: ProfilepComponent
},

{
  path:'contact',
  component:ContactComponent
},
{
  path:'subdepartment',
  component:SubdepartmentComponent
},

{
  path:'login',
  component: LoginComponent
},

{
  path:'logout',
  component: LogoutComponent
},
{
  path:'professor',
  component: ProfessorComponent
},

{
  path:'department',
  component: DepartmentComponent
},

{
  path:'subdepmasetr',
  component: SubdepmasetrComponent 
},

{
  path:'student',
  component: StudentComponent
},

{
  path:'department',
  component: DepartmentComponent
},


{ path: '', redirectTo: '/home', pathMatch: 'full' },


  {path: 'professor', component: ProfessorComponent},
  {path: 'student', component: StudentComponent},
  {path: 'profilep/:id', component: ProfilepComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
