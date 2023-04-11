import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPortalComponent } from './teacher-portal/teacher-portal.component';
import { LandingComponent } from './landing/landing.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'teacherPortal', component: TeacherPortalComponent },
  { path: 'createProfile', component: CreateProfileComponent },
  { path: 'studentPortal', component: StudentPortalComponent },


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
