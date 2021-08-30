import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterTeacherComponent } from './teacher/register-teacher/register-teacher.component';
import { RegisterStudentComponent } from './student/register-student/register-student.component';
import { RegisterCoursesComponent } from './courses/register-courses/register-courses.component';
import { RegisterMatterComponent } from './courses/register-matter/register-matter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//servicios
import { CoursesService } from './services/courses.service';
import { StudentService } from './services/student.service';
import { TeacherService } from './services/teacher.service';

//Form dinamicos de Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Componentes de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IndexComponent } from './home/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterTeacherComponent,
    RegisterStudentComponent,
    RegisterCoursesComponent,
    RegisterMatterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
  ],
  providers: [
    //servicios
    CoursesService,
    StudentService,
    TeacherService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
