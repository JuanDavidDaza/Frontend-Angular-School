import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterTeacherComponent } from "./teacher/register-teacher/register-teacher.component";
import { RegisterStudentComponent } from "./student/register-student/register-student.component";
import { RegisterCoursesComponent } from "./courses/register-courses/register-courses.component";
import { RegisterMatterComponent } from "./courses/register-matter/register-matter.component";
import { IndexComponent } from "./home/index/index.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch: 'full',
  },
  {
    path:'index',
    component:IndexComponent,
  },
  {
    path:'registerStudent',
    component:RegisterStudentComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'registerTeacher',
    component:RegisterTeacherComponent,
  },
  {
    path:'registerCourses',
    component:RegisterCoursesComponent,
  },
  {
    path:'registerMatter',
    component:RegisterMatterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
