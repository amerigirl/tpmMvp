import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TeacherPortalComponent } from './teacher-portal/teacher-portal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TeacherPortalComponent,
    CreateProfileComponent,
    EditProfileComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
