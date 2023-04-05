
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TeacherPortalComponent } from './teacher-portal/teacher-portal.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TeacherPortalComponent,
    CreateProfileComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
