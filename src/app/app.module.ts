import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestFormComponent } from './request-list/request-form/request-form.component';
import { SingleRequestComponent } from './request-list/single-request/single-request.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RequestsService } from './services/requests.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './body/body.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'request-list', component: RequestListComponent },
  { path: 'request-list/new', component: RequestFormComponent },
  { path: 'request-list/view/:id', component: SingleRequestComponent },
  { path: '', component: BodyComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    RequestListComponent,
    RequestFormComponent,
    SingleRequestComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuardService, RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
