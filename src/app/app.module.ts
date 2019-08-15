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
import { WaxComponent } from './ora/wax/wax.component';
import { HeaderWaxComponent } from './ora/wax/header-wax/header-wax.component';
import { FooterWaxComponent } from './ora/wax/footer-wax/footer-wax.component';
import { TestComponent } from './ora/wax/test/test.component';


const appRoutes: Routes = [
  { path: 'ora/wax', component: WaxComponent, children: [
      { path: 'test', component: TestComponent }
    ]
  },
  {
    path: '', component: BodyComponent, children: [
      { path: 'auth/signup', component: SignupComponent },
      { path: 'auth/signin', component: SigninComponent },
      { path: 'request-list', component: RequestListComponent },
      { path: 'request-list/new', component: RequestFormComponent },
      { path: 'request-list/view/:id', component: SingleRequestComponent }
    ]
  }
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
    BodyComponent,
    WaxComponent,
    HeaderWaxComponent,
    FooterWaxComponent,
    TestComponent
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
