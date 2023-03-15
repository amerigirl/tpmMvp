import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPortalComponent } from './teacher-portal/teacher-portal.component';
import { LandingComponent } from './landing/landing.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'teacherPortal', component: TeacherPortalComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'createProfile', component: CreateProfileComponent },
  { path: 'viewProfile', component: ViewProfileComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LandingComponent, 
  TeacherPortalComponent, 
  EditProfileComponent,
  CreateProfileComponent,
  ViewProfileComponent
]
