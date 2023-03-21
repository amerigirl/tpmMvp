import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPortalComponent } from './teacher-portal/teacher-portal.component';
import { LandingComponent } from './landing/landing.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'teacherPortal', component: TeacherPortalComponent },
  { path: 'createProfile', component: CreateProfileComponent },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LandingComponent,
  TeacherPortalComponent,
  CreateProfileComponent,

]
