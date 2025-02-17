import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { LoginDoctorComponent } from './EHealth/login-doctor/login-doctor.component';
import { DoctorSignupComponent } from './EHealth/doctor-signup/doctor-signup.component';
import { DoctorForgottonPwComponent } from './EHealth/doctor-forgotton-pw/doctor-forgotton-pw.component';
import { RechercheMedcinComponent } from './EHealth/recherche-medcin/recherche-medcin.component';
import { PatientLoginComponent } from './EHealth/Patient/patient-login/patient-login.component';
import { PatientSignupComponent } from './EHealth/Patient/patient-signup/patient-signup.component';
import { FilterDoctorPipe } from './Pipes/filter-doctor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LoginDoctorComponent,
        DoctorSignupComponent,
        DoctorForgottonPwComponent,
        PatientLoginComponent,
        PatientSignupComponent,
        RechercheMedcinComponent,
        FilterDoctorPipe

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
      HomeModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
