import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { LoginDoctorComponent } from './EHealth/login-doctor/login-doctor.component';
import { DoctorSignupComponent } from './EHealth/doctor-signup/doctor-signup.component';
import { DoctorForgottonPwComponent } from './EHealth/doctor-forgotton-pw/doctor-forgotton-pw.component';
import { RechercheMedcinComponent } from './EHealth/recherche-medcin/recherche-medcin.component';

const routes: Routes = [
    { path: 'doctor/signup', component: DoctorSignupComponent },
    { path: 'doctor/forgottenPW', component: DoctorForgottonPwComponent },
    { path: 'doctor/login', component: LoginDoctorComponent },
    { path: 'Argon/home',             component: HomeComponent },
    { path: 'Argon/user-profile',     component: ProfileComponent },
    { path: 'Argon/register',           component: SignupComponent },
    { path: 'Argon/landing',          component: LandingComponent },
    { path: 'Argon/login', component: LoginComponent },
    { path: 'doctor/login', component: LoginDoctorComponent },
    { path: 'doctor/recherche', component: RechercheMedcinComponent},
    { path: '', redirectTo: 'Argon/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{

    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
