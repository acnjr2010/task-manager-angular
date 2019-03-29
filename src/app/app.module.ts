// angular imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

// angular plugins imports
import { TokenService } from './shared/token.service';

// components imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskSearchComponent } from './navbar/task-search/task-search.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

// services imports
import { TaskService } from './tasks/shared/task.service';

// modules imports
import { AppRoutingModule } from 'app/app-routing.module';

// guards
import { AuthGuard } from './guards/auth.guard';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard'

// jquery
import * as $ from 'jquery';
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import { AuthService } from './shared/auth.service';

window['datetimepicker'] = window['datetimepicker'] = datetimepicker;


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SignInFormComponent,
    SignUpFormComponent,
    TaskComponent,
    TaskDetailComponent,
    TaskSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ 
    AuthGuard,
    AuthService,
    NotAuthenticatedGuard,
    TaskService,
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
